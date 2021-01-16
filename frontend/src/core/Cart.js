import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "../core/Base";
import Card from "./CardCart";
import { loadCart, createCart } from "./helper/cartHelper";
import Razorpay from "./RazorpayCheckout";
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    createCart();
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div className="mx-auto">
        <h4 className="text-center">Products in your Cart</h4>
        <hr />
        <br />
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                product={product}
                setReload={setReload}
                reload={reload}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const loadCheckout = () => {

      const getTotalAmt = () => {
        let amount=0;
        let tamount=0;
        products.map((p)=>{
          amount += p.price * p.quantity;
        })
        tamount= amount+40;
        return tamount ;
        }
  

    return (
      <div className="mx-auto">
        <h4 className="text-center">Checkout Section</h4>
        <hr />
        <br />
        {getTotalAmt()>47.2 ? (
          <div className="table-responsive">
          <table className="table table-hover" style={{ minWidth: "300px" }}>
          <thead>
                          <tr className="bg-info text-white">
                            <th scope="col" className="text-center">
                              Serial no.
                            </th>
                            <th scope="col" className="text-center">
                              Name
                            </th>
                            <th scope="col" className="text-center">
                              Price
                            </th>
                            <th scope="col" className="text-center">
                              Description
                            </th>
                            <th scope="col" className="text-center">
                              Quantity
                            </th>
                            <th scope="col" className="text-center">
                              Total Price
                            </th>
                          </tr>
            </thead>
            <tbody>
            {products.map((product, index) => {
              return (
                              <tr key={index} className="text-center">
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>₹{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity || 1}</td>
                                <td>
                                ₹{product.price * (product.quantity || 1)}
                                </td>
                              </tr>
              );
            })}
                            <tr className="text-center">
                                        <td><i>Delivery Charges</i></td>
                                        <td></td>
                                          <td></td>
                                         <td></td>
                                         <td></td>
                                        <td>₹40</td>
                                      </tr>
  
                                      
                                      <tr className="text-center table-info">
                            <td>
                              <strong>Grand Total**</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <strong>₹{getTotalAmt()}</strong>
                            </td>
                          </tr>											
                        
            </tbody>
          </table>
          </div>
        ):(
          ""
        )}
        
        <br></br>
        <Razorpay products={products} setReload={setReload} reload={reload} />
      </div>
    );
  };

  return (
    <Base title="Shopping Cart" description="Manage products in your cart here">
      <div className="row">
        <div className="col-sm-6">
        {products.length > 0 ? (
            loadAllProducts()
          ) : (
            <h6 className="text-warning">The Cart is Empty!</h6>
          )}
        </div>
        <div className="col-sm-6 bg-light text-dark rounded">
        {loadCheckout()}
        </div>
      </div>
    </Base>
  );
};

export default Cart;