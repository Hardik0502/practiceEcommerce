import { Link } from 'react-router-dom';
import './orders.css' ;
import { Header } from './Header';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { priceformat } from '../Functions/priceformat';


export const OrdersPage = ( {cart} )=>{

  const [orders, setorders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders?expand=products')
    .then((response)=>{
      setorders(response.data);
    })
  }, [])
  


    return (
        <>

        <title>My Orders</title>
        
       < Header cart={cart} />

    <div className="orders-page">
      <div className="page-title">Your Orders</div>

      <div className="orders-grid">

        {orders.map((order)=>{
          return <div key={order.id} className="order-container">

          <div className="order-header">
            <div className="order-header-left-section">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>{dayjs(order.estimatedDeliveryTimeMs).format('MMMM D')}</div>
              </div>
              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>{priceformat(order.totalCostCents)}</div>
              </div>
            </div>

            <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>{order.id}</div>
            </div>
          </div>

          <div className="order-details-grid">

  {/* The one product has 3 section like productImage , productDetails and the productAction. */}
            { order.products.map((productOrder)=>{
              return <Fragment key={productOrder.productId}> { /* We want to give key so we can not give it to <></> so we use this tag. */}

              <div className="product-image-container">
              <img src={productOrder.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {productOrder.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(productOrder.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {productOrder.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <a to="/tracking">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>

              </Fragment>
            }) }

            

          </div>
        </div>
        })}

        
      </div>
    </div>

    </>
        
    )
}
