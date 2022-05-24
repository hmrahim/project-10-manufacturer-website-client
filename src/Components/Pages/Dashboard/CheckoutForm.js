import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ data }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transId, setTransId] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const price = parseInt(data.price) * parseInt(data.quantity);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError(" ");
    }

    // setCardError(error?.message || " ");

    // if(error){
    //     setSuccess(" ")

    // }
    setLoading(true)

    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: data.email,
            name: data.title,
          },
        },
      }
    );

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess(" ");
    } else {
      console.log(paymentIntent);
    }
    if (paymentIntent) {
      setSuccess("Success! your payment is complete, thank you");
      setTransId(paymentIntent.id)
      console.log("payment",paymentIntent);
      const obj = {
        email: data.email,
        name: data.name,
        productId: data._id,
        transactionId: paymentIntent.id,
      };

      fetch(`http://localhost:5000/order/${data._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`,
          
        },
        body:JSON.stringify(obj)
      })
      .then(res=>res.json())
      .then(data=>{
          setLoading(false)
      })
    }

    // if(intentError){
    //     setCardError(intentError?.message)
    //     setSuccess("")
    // }else{
    //     setSuccess("congratch your payment is complited")
    //     setCardError("")
    //     console.log("success",paymentIntent);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs btn-primary mt-4 capitalize"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
         {loading ? "order purchasing..." : "purchase order"} 
        </button>
      </form>
      {cardError && <p className="text-red-500 text-[14px]">{cardError}</p>}
      {success && <p className="text-green-500 text-[14px]">{success}</p>}
      {transId && <p className="text-red-500 text-[14px] font-semibold">Transaction Id: {transId}</p>}
    </div>
  );
};

export default CheckoutForm;
