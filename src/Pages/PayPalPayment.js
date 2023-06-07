import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { Component } from 'react';

const PayPalPayment = () =>  {
    const url = "http://localhost:8888"
    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch(`${url}/my-server/create-paypal-order`, {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },

          // use the "body" param to optionally pass additional order information  
          body: JSON.stringify({
           product:{
            description: "brazillian hair",
            cost: '200.59'
           }
          }),
        })
        .then((response) => response.json())
        .then((order) => order.id);
      };
      const onApprove = (data) => {

         // Order is captured on the server and the response is returned to the browser
         return fetch(`${url}/my-server/capture-paypal-order`, {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID
          })
        })
        .then((response) => {
            console.log('payment successfull')
            return response.json()
        } ).then(data => console.log(data));
      };
    
        return (
            <div>
                <PayPalButtons
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
        );

}

export default PayPalPayment;