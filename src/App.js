import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Details from './component/Details';
import Default from './component/Default';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Nav from './component/Nav';
import CartModel from './component/CartModel';
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={ProductList}  />
        <Route exact path="/details" component={Details}  />
        <Route exact path="/cart" component={Cart}  />
        <Route exact  component={Default}  />
      </Switch>
      <CartModel />
    </div>
  )
}

export default App
