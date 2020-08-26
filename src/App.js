import React, { useState, useEffect } from 'react';
import './App.css';
import Foods from './Components/FoodItem/Foods';
import Cart from './Components/CartItem/Cart.js';

function App() {
  const [foods , setFood] = useState([]);
  const [cart , setCart] = useState([]);
  useEffect(() => {
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
    .then(response =>  response.json())
    .then(datas => {
      console.log(datas.data.foods);
     setFood(datas.data.foods);
    })
  }, []);

  const addToCart = item => {
    const newCart = [...cart, item];
    setCart(newCart);
  }

  const Price = cart.reduce((acc , current) => acc + current.price, 0);
  const totalPrice = Price.toFixed(2);
    return (
    <div className="container-fluid">
        <h2 className="text-center text-dark mt-3">My Delicious Resturant</h2>
      <div className="row px-5">
      <div className="col-md-9 col-12">
      <h3 className="text-center text-success text">This is Food Menu</h3>
      <div className="row border-right">
      
          {foods.map(food => <Foods key={food._id} food={food} addToCart={addToCart}></Foods>)}
          
        </div>
      </div>
      <div className="col-md-3 col-12">
        <div className="text-center">
        <h3 className="text-center text-success text">Food Cart: {cart.length}</h3>
        <ul className="list-group">
          {
            cart.map( item => <Cart item = {item}></Cart>)
          }
        </ul>
        <button className="btn btn-lg btn-primary mt-3">Total Price :<span className="badge badge-lg badge-light">${totalPrice}</span></button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
