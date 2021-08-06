/* eslint-disable no-loop-func */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/shopSlice";
import { selectOrderItems, selectCartSubtotal } from "../redux/cartSlice";

import CartItem from "./CartItem";

const CartPage = () => {
    document.title = "Shopping Cart | Plankcooking.com";
    const products = useSelector(selectProducts);
    const orderItems = useSelector(selectOrderItems);
    let cartSubtotal = useSelector(selectCartSubtotal);

    const _orderProductIds = [];
    orderItems.map(orderItem => {
        _orderProductIds.push(orderItem.productId);
        return _orderProductIds;
    });

    let _products = [];
    let cartItemCounter = 0;

    for (cartItemCounter = 0; cartItemCounter < _orderProductIds.length; cartItemCounter++) {
        let _tempProduct = products.filter(function(product) {
            return product.productId === _orderProductIds[cartItemCounter];
        });
        _products.push(_tempProduct[0]);
    }

    var itemCounter = 0
    var itemSubtotal = 0
    for(var ctr = 0; ctr < _products.length; ctr++){
        cartSubtotal += _products[ctr].price * orderItems[ctr].qty;
    }

    return (
        <>
            <main className="cart__wrapper container-fluid p-0" id="toggle__wrapper">
                <section className="container text-center m-0 p-0">
                <section className="cart__content__wrapper mt-3">                  
                        <div className="cart__content mx-4 mt-5 w-100">
                            <div className="cart__info__border__wrapper p-2 m-0">
                                <div className="cart__info__description col-7 m-0 p-0">
                                    <p className="text-left p-0 m-0">
                                    SHOPPING CART: Your shopping cart contains {_products.length} items. 
                                    </p>    
                                </div>    
                                <div className="cart__info__links col-5 m-0 p-0">
                                    <Link to="/Shop/Products">
                                        <img src="/img/ContinueShopping_button.png" alt="Continue Shopping" />
                                    </Link>
                                    <Link className="ml-3" to="/Cart/Checkout">
                                        <img src="/img/Checkout_button.png" alt="Checkout" />
                                    </Link> 
                                </div>    
                            </div>
                            
                            <div className={_products.length > 0 ? "cart__content__main__wrapper m-0 mt-4 p-2" : "d-none"}>

                                <div className="cart__main__content__description m-0 p-0">
                                    <div className="cart__info__description col-6 p-1">
                                        <p className="text-left p-0 m-0">
                                            Shipping to You 
                                        </p>    
                                    </div>  
                                    <div className="cart__info__description__two col-2 m-0 p-0">
                                        <p className="text-center p-0 m-0">
                                            Price
                                        </p>    
                                    </div>  
                                    <div className="cart__info__description__two col-2 m-0 p-0">
                                        <p className="text-center p-0 m-0">
                                            Quantity
                                        </p>    
                                    </div>
                                    <div className="cart__info__description__two col-2 m-0 p-0">
                                        <p className="text-center p-0 m-0">
                                            Total
                                        </p>    
                                    </div>     
                                </div>
                            
                                {_products.map((product, itemCounter) => (<CartItem product={product} itemCounter={itemCounter} itemSubtotal={itemSubtotal} key={product.productId}  />), itemSubtotal+=products[itemCounter].price * (orderItems.length === 0 ? 0 : orderItems[itemCounter].qty), itemCounter++)} 
                                
                                <div className="cart__main__content__subtotal m-0 p-0 py-1">
                                    <div className="cart__item__subtotal col-8 p-1">
                                    </div>  
                                    <div className="cart__item__subtotal__two col-2 m-0 p-0 py-1">
                                        <p className="text-right p-0 m-0 py-1 mr-1">
                                            Subtotal: 
                                        </p>    
                                    </div>
                                    <div className="cart__info__subtotal__two col-2 m-0 p-0 py-1">
                                        <p className="text-center p-0 m-0 py-1">
                                            ${cartSubtotal.toFixed(2)}
                                        </p>    
                                    </div>     
                                </div>

                                <div className="cart__main__content__subtotal m-0 p-0 py-2">
                                        <div className="cart__info__description col-7 m-0 p-0">
                                        </div>    
                                        <div className="cart__info__links col-5 m-0 p-0">
                                            <Link to="/Shop/Products">
                                                <img src="/img/ContinueShopping_button.png" alt="Continue Shopping" />
                                            </Link>
                                            <Link className="ml-3" to="/Cart/Checkout">
                                                <img src="/img/Checkout_button.png" alt="Checkout" />
                                            </Link> 
                                    </div>
                                </div>

                            </div>
                    </div>
                </section>
                </section>
            </main>
        </>
    )
}

export default CartPage;