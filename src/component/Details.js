import React, { useContext } from 'react'
import { productContext } from '../Context'
import ComponentTitle from './ComponentTitle'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ButtonStyle} from './button'

function Details() {

  const {singleData, openModel } = useContext(productContext)
  const {id, image, inCart, name, price, alias, description } = singleData
  return (
    <div className="container">
      <ComponentTitle name="Product Details" />
      <div className="row">
        <div className="col-10 col-md-6 col-lg-6 mx-auto">
        <h2>{name}</h2>
          <p className="">{alias}</p>
        </div>
      </div>
      <div className="row mt-5">
      <ImgStyle className="col-10 mx-auto col-md-6 col-lg-6  ">
        <img src={image} className="image-fluid " alt=""/>
      </ImgStyle>
      <div className="col-10 mx-auto col-md-6 col-lg-6 font-weight-bold ">
        <PriceStyle className="price mt-2 mb-4">Price: <strong>${price}</strong></PriceStyle>
        <p><strong>Product description:</strong></p>
        <h5 className="text-muted">{description}</h5>
      </div>
      </div>
      {/* button */}
      <div className="row my-6">
        <hr/>
      <div className="col-10 col-md-6 mx-auto col-lg-6 mx-auto ">
        <Link to="/">
          <ButtonStyle className="m-3 mt-5">
            Back to Store
          </ButtonStyle>
        </Link>
        <ButtonStyle onClick={()=>openModel(id)} cart className=" m-3 mb-5 " disabled={inCart?true:false}>
            {
              inCart?("In cart"):("Add to Cart")
            }
        </ButtonStyle>
      </div>
      </div>
    </div>
  )
}


const ImgStyle = styled.div `

img{
  height:20em;
}

`

const PriceStyle = styled.h3 `

color: var(--mainliteblue)

`

export default Details
