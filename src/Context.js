import React, { Component, createContext } from 'react'
import {data, singleData} from './productStore'


const productContext = createContext()

class ContextProvider extends Component {

  state = {
    products : [],
    singleData : singleData,
    cart : [],
    modelOpen : false,
    modelProduct : singleData,
    cartSubTotal : 0,
    cartTax : 0,
    cartTotal : 0
  }


  componentDidMount(){
    this.setProduct()
  }

  // componentDidMount(){
  //   const raw = localStorage.getItem('product')

  //   const unRawProduct = JSON.parse(raw)
  //   this.setState({products: unRawProduct})
  // }

  // shouldComponentUpdate(prevProps){
  //   if(!prevProps){
  //     localStorage.setItem('product', JSON.stringify(this.state.cart))
  //   }
  // }

  setProduct = () => {

    let products = []
    data.forEach(item => {

      const singleValue = {...item}
      products = [...products, singleValue]

    })
    
    this.setState({products})
  }

    // helper function for getint the item

    getItem = (id) => {
      const product = this.state.products.find(item => item.id === id)
      return product
    }
  
    handleDetail = (id) => {

      const item = this.getItem(id)
      this.setState({singleData:item})
    }

    addToCart = (id) => {
      const tempProducts = [...this.state.products]

      // I got the id of the product using the id passed when the button was clicked.
      const productId = this.getItem(id)

      // Here i got the index position of the product using the id gotten above
      const productIdex = tempProducts.indexOf(productId)

      // below, i used the index found above as the key to find the value of the product.
      const cartProduct = tempProducts[productIdex]

      // now am going to change some of the values on the product found
      
      cartProduct.inCart = true
      cartProduct.count = 1
      
      const price = cartProduct.price

      cartProduct.total = price

      this.setState(()=>{
        return{products:tempProducts, cart:[...this.state.cart, cartProduct]}
        
      }, ()=>{
        this.addTotal()
      })
    }

    openModel = id => {
     const productId = this.getItem(id)
     
     this.setState({
       modelOpen:true, modelProduct:productId
     })
    }

    closeModel = () => {
      this.setState({
        modelOpen:false
      })
    }

    inCrement = id => {
      let cart = [...this.state.cart]
      let productId = this.getItem(id)

      let index = cart.indexOf(productId)
      let inCrementedItem = cart[index]

      inCrementedItem.count = inCrementedItem.count + 1
      inCrementedItem.total = inCrementedItem.price * inCrementedItem.count

      this.setState(()=>{
        return{
          cart: [...cart]
        }
      }, this.addTotal())
    }

    decrement = id => {
      let tempCart = [...this.state.cart]
      let index = tempCart.indexOf(this.getItem(id))

      let decrementedItem = tempCart[index]
      decrementedItem.count = decrementedItem.count -1

      if(decrementedItem.count === 0) {
        this.removeItem(id)
      } else {
        decrementedItem.total = decrementedItem.price * decrementedItem.count

        this.setState(()=>{
          return {
            cart : [...tempCart]
          }
        }, this.addTotal())
      }
    }

    removeItem = id => {
      let tempProduct = [...this.state.products]
      let tempCart = [...this.state.cart]

      tempCart = tempCart.filter(item => item.id !== id)
      let index = tempProduct.indexOf(this.getItem(id))

      let removedProduct = tempProduct[index]
      removedProduct.count = 0

      removedProduct.inCart = false
      removedProduct.total = 0

      this.setState(()=>{
        return {
          cart : [...tempCart],
          products : [...tempProduct]
        }
      }, this.addTotal())
    }

    clearCart = () => {
      this.setState(()=>{
        return{
          cart : []
        }
      }, ()=>{
        return (
          this.setProduct(),
          this.addTotal()
        )
      })
    }

  addTotal = () => {
    let subtotal = 0
    // get the total from the cart and append it to the subtotal
    this.state.cart.map(cartItem =>( subtotal += cartItem.total))

    let tempTax = subtotal * 0.1 
    const cartTax = parseFloat(tempTax.toFixed(2))

    const cartTotal = subtotal + cartTax

    this.setState({
      cartSubTotal:subtotal,
      cartTax,
      cartTotal
    })
  }
  
  render() {
  
    return (
      <productContext.Provider value={{...this.state,
      handleDetail :this.handleDetail,
      addToCart : this.addToCart,
      openModel:this.openModel,
      closeModel:this.closeModel,
      inCrement:this.inCrement,
      decrement:this.decrement,
      removeItem:this.removeItem,
      clearCart:this.clearCart
      
      }}>
       { this.props.children}
      </productContext.Provider>
    )
  }

}
export {ContextProvider, productContext}