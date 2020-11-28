import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonStyle} from './button'

export default function Nav() {
  return (
    <div>
      <NavStyle className="navbar navbar-expand-sm ">
      <span className="navbar-brand">
        <Link to="/">sWATCHES</Link>
      </span>
      <ul className="navbar-nav align-items-center ">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">Product</Link>
        </li>
      </ul>
      
        <Link to="/cart" className="ml-auto">
          <ButtonStyle>
            Cart
          </ButtonStyle>
        </Link>
      
      </NavStyle>
    </div>
  )
}



const NavStyle = styled.nav `
background : var(--mainblue);


`;
 


