export const addItemToCart = (cartItems, CartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === CartItemToAdd.id 
        )

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === CartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem 
            )
    }

    return [...cartItems, { ...CartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}