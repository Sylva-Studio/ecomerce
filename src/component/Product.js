import React, { useContext } from 'react'
import { productContext } from '../Context'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Product({id, image, inCart, price, name}) {
  const {handleDetail, addToCart, openModel} = useContext(productContext)

  return (
    <ProductWrapper className="col-9 col-md-4 mx-auto" >
      <div className="card my-3">
        <div className="img-style">
       <Link to="/details">
       <img onClick={()=>handleDetail(id)} src={image} alt=""/>
       </Link>
        <button className="isCart"  onClick={()=>addToCart(id)} disabled={inCart?true:false}>
            <i onClick={()=>openModel(id)}>
            {
              inCart?("In cart"):("Cart")
            }
            </i>
        </button>
        </div>
        <div className="d-flex justify-content-between p-2 info">
        <h4 className="name">{name}</h4>
        <h3 className="price">${price}</h3>
        </div>
      </div>
    </ProductWrapper>
  )
}

Product.propTypes = {
  id : PropTypes.number.isRequired,
  inCart : PropTypes.bool.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  image : PropTypes.string.isRequired
}

const ProductWrapper = styled.div`

    

    .card{
      background: white;
      transition: all .5s linear;
      

      &:hover{
        box-shadow:1px 1px 10px rgba(0, 0, 0, 0.24);
      }

      .isCart{
        color: var(--mainwhite);
        border:none;
        border-radius:0 0 .5em 0;
        padding:.1em .3em;
        background: var(--mainliteblue);
        position:absolute;
        right: 0;
        top:-1em;
        outline:none;
      }

      .info{
        background:rgba(0, 0, 0, 0.03);
        transition: all .5s linear;
      }

      &:hover .info{
        background:rgba(0, 0, 0, 0.1);
      }
    
      .price{
        color: var(--mainliteblue);
      }

      .name{
        font-size:1em;
        padding-top:.5em;
        color:var(--mainblue);
      }

      

      img{
        width:6em;
        height:10em;
        padding-left:3em
        display:block;
        margin 1em ;
        transition: all .5s linear;
        overflow:hidden;
      }
      &:hover img{
        transform: scale(1.1);
      }
      
    }


`

export default Product
