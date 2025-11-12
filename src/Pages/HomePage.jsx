import React, { useEffect, useState } from "react";
import '../Pages/header.css' ;
import '../Pages/HomePage.css' ;
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { products } from "../../data/products";   // as we get the data from an api, we no longer needed this file.
import axios from "axios";
import { priceformat } from "../Functions/priceformat";


export const HomePage = ( {cart} )=>{

  // We want to add backend which is premade by the simpleWebDeveloper channel.
  // We just downloaded the zip file and pasted here. after that we copied the backend path and run the npm dev. it was in local3000 so we searched that on chrome and then added /api/products so we get http://localhost:3000/api/products 

  // fetch('http://localhost:3000/api/products');  // as we know the fetch always returns a promises and the promises always let us to wait to finish the asynchronous code first.So Generally we used .then() methood with promises to get our data.
  //   .then((response)=>{
  //    console.log(response.json());  // It also returns a promises so we still have to use then to get the data.
  // })


  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data)     // That's how we can get the data from an api.
  //   })
  // })  // This code is saying that, .then method get response from fetchApi and as it get response it gives us data of that api.
// Fetch is still littlt bit complecated as we have to use then manytimes. SO we can use Axios to make request in cleaner way.
// you have to install npm install axios@latest .

  // axios.get('http://localhost:3000/api/products')
  // .then((response)=>{
  //   console.log(response.data);
  // })  // So it is more cleaner way to fetch data.
  // You can see that every time you visit the home page, the api loads again and again but we want like it should load only once. so we can use useEffect()

  const [products, setproducts] = useState([]) // we have many data so we'll store into an array.
  // const [cart, setcart] = useState([])

  useEffect(() => {
    axios.get('/api/products')
    .then((response)=>{
      setproducts(response.data);
    })

    // similarly let's do it for the carts. Note : the name after 3000 can get from the documentation of SuperSimpleDev's react course.
//       axios.get('http://localhost:3000/api/cart-items')
//       .then((response)=>{
// //      console.log(response.data); //We get the product with it's information like productId,quantity etc
//           setcart(response.data);
//       })   // carts number or section is in Header page so we can use props to give this value to the cart item.


  }, [])  
  // Now we want to store this data somewhere. So in order to store your data the useState has been used.
  

  


    return(
        <>
        
        <title>Ecommerce Project</title>


    < Header cart={cart} />  {/* make changes in header section. after that see vite.config.js file*/}
    {/* After that, I want to make get the cart in my checkout page so we also need to send request. Instead of sending request we can write it into our app.jsx page where both pages are available and then we can sent the cart as propt so the api will loads only once . */}

    <div className="home-page">
      <div className="products-grid">

      { products.map((product)=>{
        return <div key={product.id} className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={product.image} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
            <div className="product-rating-count link-primary">
              {product.rating.count}
            </div>
          </div>

          <div className="product-price">
            { priceformat(product.priceCents) }
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
      }) }

        

        {/* <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/intermediate-composite-basketball.jpg" />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Intermediate Size Basketball
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-40.png" />
            <div className="product-rating-count link-primary">
              127
            </div>
          </div>

          <div className="product-price">
            $20.95
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-45.png" />
            <div className="product-rating-count link-primary">
              56
            </div>
          </div>

          <div className="product-price">
            $7.99
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
        
        </>
    )
}