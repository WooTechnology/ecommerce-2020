import React, { useState } from "react";
import { API, KEY } from "../backend";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createOrder } from "./helper/orderHelper";
import { clearCart } from "./helper/cartHelper";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// const _DEV_ = document.domain === "localhost";

function Razorpay({ products, setReload = (f) => f, reload = undefined }) {
  const initialValues = {
    loading: false,
    success: false,
    clientToken: null,
    instance: {},
    error: "",
  };

  //States
  const [info, setInfo] = useState(initialValues);

  //User data
  const { user, token } = isAuthenticated();
  const getFinalAmount = () => {
    let amount = 0;
    let tamount = 0;
    products.map((p) => {
      tamount += p.price * p.quantity;
    });
    amount = (tamount + 500) * 0.18 + (tamount + 500);
    return amount;
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(`${API}/razorpay/${user._id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cartproducts: products }),
    })
      .then((t) => t.json())
      .catch((err) => console.log(err));

    console.log(data);

    const options = {
      key: `${KEY}`,
      currency: data.currency,
      amount: getFinalAmount().toString(),
      order_id: data.id,
      name: "Interior Designs",
      description: "Thank you for purchasing our products!",
      //   image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        setInfo({ ...info, loading: false, success: response.success });
        console.log("payment success");

        //Order Data for creating order
        const orderData = {
          products: products,
          transaction_id: response.razorpay_payment_id,
          amount: data.amount / 100,
        };

        //Create order for the user
        createOrder(user._id, token, orderData);

        //Clear cart and force reload
        clearCart(() => {
          setReload(!reload);
        });
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: user.name,
        email: user.email,
        phone_number: user.mobno,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      {getFinalAmount() > 590 ? (
        <div>
          <h5>Total Amount to be paid: ₹{getFinalAmount()}</h5>
        </div>
      ) : (
        <div></div>
      )}

      {isAuthenticated() && products.length > 0 ? (
        <div className="text-center">
          <button
            onClick={displayRazorpay}
            className="btn btn-info rounded m-4"
          >
            Place Your Order
          </button>
        </div>
      ) : (
        <div>
          {!isAuthenticated() ? (
            <Link to="/signin">
              <button className="btn btn-warning rounded">Signin</button>
            </Link>
          ) : (
            <h5 className="text-warning">
              Add an item in the cart to continue
            </h5>
          )}
        </div>
      )}
    </div>
  );
}
export default Razorpay;
