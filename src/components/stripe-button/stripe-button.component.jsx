import React from 'react';
import { withRouter } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';

const StripeCheckoutButton = ({ price, cartItems, history, dispatch }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KCcnBISnMKcxB5B5jmHjORPpof2vA8oSSxsWWqOKwK0fBI2OUdwIgJpjnBMPJxdMMmS2H6PZWEvMcbmpKCl4aEf00QNmtyE4Z';

    // const emptyCart = clearCart()
    const onToken = () => {
        dispatch(clearCart());
        history.push('/');
        alert('Payment Successful');
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

// const mapDispatchToProps = dispatch => ({
//     // emptyCart: dispatch(clearCart())
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(StripeCheckoutButton));