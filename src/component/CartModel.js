import React, { useContext } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ButtonStyle} from './button'
import { productContext } from '../Context'


function CartModel() {

  const {modelProduct, modelOpen, closeModel} = useContext(productContext)

  const{ id, image, name, price} = modelProduct

  if(!modelOpen) return null
  else{
    return (
      <ModelStyle  >
        <div className="container">
       <div className="row">
          <div id="model" className="col-10 col-md-6 col-lg-6 mx-auto px-5 py-2">
            <h3>Item added to cart</h3>
            <img src={image} className="img-fluid my-3" alt=""/>
            <h5>{name}</h5>
          <h5 className="price">Price: 
            <strong>${price}</strong>
          </h5>
            
           <div className="btnDiv mt-3">
           <Link to="/">
           <ButtonStyle onClick={()=>closeModel()}>
             Continue
          </ButtonStyle>
           </Link>
           <Link to="/cart">
           <ButtonStyle cart onClick={()=>closeModel()}>
             Go to Cart
          </ButtonStyle>
           </Link>
           </div>
          </div>
         
        </div>
      
        
        </div>
      </ModelStyle >
    )
  }

}

const ModelStyle = styled.div `
  position : fixed;
  text-align:center;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  #model{
    background:var(--mainwhite);
    margin-top:2em;
    display:flex;
    justify-content:center;
    flex-direction:column;
    border-radius:.2em;
    
  }
  .price{
    color:var(--mainliteblue);
  }
  .btnDiv{
    display:flex;
    justify-content:center;
    flex-direction:column;
    button{
      margin-bottom:.5em;
    }
  }

  img{
    height:9em;
  }
`

export default CartModel
