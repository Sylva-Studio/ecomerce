import React, { useContext } from 'react'
import { productContext } from '../Context'
import ComponentTitle from './ComponentTitle'
import Product from './Product'
import style from 'styled-components'
import styled from 'styled-components'


function ProductList() {
  const {products} = useContext(productContext)
  return (
    <div className="container">
      <ComponentTitle name="Product List"/>
      <div className="row" >
      {
        products.map(product => {
          return (
      
              <Product key={product.id} {...product} />
          )
        })
      }
    </div>
    </div>
  )
}

const ProductStyle = styled.div`
    
    
`;

export default ProductList
