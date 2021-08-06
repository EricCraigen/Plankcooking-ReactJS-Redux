import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartSubtotal: 0.00,
            orderItems: [],
            qtyUpdateId: 0,
            cartItemsLength: 0,
            orderCart: []
        },
        reducers: {
            orderItemAdded: (state, action) => {
                state.orderItems.push(action.payload);
            },
            orderCartCreated: (state, action) => {
                state.orderCart.push(action.payload);
            },
            qtyOnChange: (state, action) => {
                state.cartItemsLength = state.orderItems.length;
                  state.orderItems[state.qtyUpdateId].qty = action.payload;  
            },
            checkoutInputOnChange: (state, action) => {
                state.orderCart.billingFirstName = action.payload
            },
            removeItemsFromCart: (state, action) => {
                // TODO
            },
            computeCartSubtotal: (state, action) => {
                for(var ctr = 0; ctr < state.products.length; ctr++){
                    state.cartSubtotal += state.products[ctr].price * state.orderItems[ctr].qty;
                }
            },
            sameAsBillingChecked: (state, action) => {
                if (document.getElementById("sameAsAddress").checked) {
                    state.orderCart.shippingFirstName = state.orderCart.billingFirstName;
                    state.orderCart.shippingLastName = state.orderCart.billingLastName;
                } else {
                    state.orderCart.shippingFirstName = null
                }

            }
        }
    }
)

export const selectCartSubtotal = state => state.cart.cartSubtotal;
export const selectOrderItems = state => state.cart.orderItems;
export const selectQtyUpdateId = state => state.cart.qtyUpdateId;
export const selectOrderCart = state => state.cart.orderCart;
export const {
                orderItemAdded, 
                orderCartCreated, 
                qtyOnChange, 
                checkoutInputOnChange, 
                removeItemsFromCart, 
                computeCartSubtotal, 
                sameAsBillingChecked
            } = cartSlice.actions;

export default cartSlice.reducer;