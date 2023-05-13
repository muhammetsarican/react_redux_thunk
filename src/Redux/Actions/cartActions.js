import * as actions from "./actionTypes"

export function addToCart(cartItem) {
    return { type: actions.ADDTOCART, payload: cartItem }
}
export function removeFromCart(cartItem) {
    return { type: actions.REMOVEFROMCART, payload: cartItem }
}
