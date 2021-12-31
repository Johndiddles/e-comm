import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KCcnBISnMKcxB5B5jmHjORPpof2vA8oSSxsWWqOKwK0fBI2OUdwIgJpjnBMPJxdMMmS2H6PZWEvMcbmpKCl4aEf00QNmtyE4Z';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name= "BJ's' Comf"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;