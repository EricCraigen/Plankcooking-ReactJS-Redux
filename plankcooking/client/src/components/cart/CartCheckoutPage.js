/* eslint-disable no-loop-func */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../redux/shopSlice";
import { selectOrderItems, selectCartSubtotal, selectOrderCart, checkoutInputOnChange, sameAsBillingChecked } from "../redux/cartSlice";

import CartItem from "./CartItem";

const CartCheckoutPage = () => {
    document.title = "Shopping Cart | Plankcooking.com";
    const products = useSelector(selectProducts);
    const orderItems = useSelector(selectOrderItems);
    const orderCart = useSelector(selectOrderCart);
    let cartSubtotal = useSelector(selectCartSubtotal);

    const dispatch = useDispatch();

    const [billingFirstName, setBillingFirstName] = useState(orderCart.billingFirstName);
    const [billingLastName, setBillingLastName] = useState(orderCart.billingLastName);

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
    console.log(_products);

    var itemCounter = 0
    var itemSubtotal = 0
    for(var ctr = 0; ctr < _products.length; ctr++){
        cartSubtotal += _products[ctr].price * orderItems[ctr].qty;
    }

    return (
        <>
            <main className="cart__wrapper container-fluid p-0">
                <section className="container text-center m-0 p-0">
                    <section className="cart__content__wrapper mt-3">                  
                            <div className="cart__content mx-4 mt-5 w-100">
                                <div className="cart__info__border__wrapper p-2 m-0">
                                    <div className="cart__info__description col-7 m-0 p-0">
                                        <p className="text-left p-0 m-0">
                                            Enter Billing &amp; Shipping Information &#62; Step 2 of 4 
                                        </p>
                                    </div>  
                                        
                                </div>
                                <div className="cart__content__main__wrapper m-0 mt-4 p-2">

                                    <div className="cart__main__content__description m-0 p-0">
                                        <div className="cart__header__billing col-6 p-1">
                                            <p className="text-left p-0 m-0">
                                                Billing Address 
                                            </p>    
                                        </div>  
                                        <div className="cart__shipping__header d-flex align-items-center col-6 p-1">
                                            <p className="text-left p-0 m-0 ml-1">
                                                Shipping Address 
                                            </p>
                                            <label htmlFor="sameAsAddress">
                                                <input className="mr-1" 
                                                       type="checkbox" 
                                                       id="sameAsAddress" 
                                                       name="sameAsAddress" 
                                                       value="1" 
                                                       onChange={() => dispatch(sameAsBillingChecked())}
                                                /> 
                                                Same as Billing Address
                                            </label>
                                        </div>    
                                    </div>
                                <form action="/Cart/Checkout" method="POST">
                                    <div className="cart__main__content__item m-0 p-0">
                                    
                                        <div className="cart__info__billing__inputs col-6 m-0 p-0 pl-1">
                                        
                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        First Name:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="fNameBilling"
                                                        name="fNameBilling"
                                                        className="item__quantity form-control m-0 p-0"
                                                        onKeyUp={() => dispatch(checkoutInputOnChange(billingFirstName))}
                                                        onChange={(key) => setBillingFirstName(key.target.value)}
                                                        value={billingFirstName}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Last Name:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="lnameBilling"
                                                        name="lnameBilling"
                                                        className="item__quantity form-control m-0 p-0"
                                                        onKeyUp={() => dispatch(checkoutInputOnChange(billingLastName))}
                                                        onChange={(key) => setBillingLastName(key.target.value)}
                                                        value={billingLastName}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Address:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="address1Billing"
                                                        name="address1Billing"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.billingAddress1}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Address 2:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="address2Billing"
                                                        name="address2Billing"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.billingAddress2}
                                                        placeholder="Optional"
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        City:	
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="cityBilling"
                                                        name="cityBilling"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.billingCity}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        State:	
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <select className="cart__shipping__select w-100" name="stateBilling" id="stateBilling">
                                                        <option value="">Select</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DoC">Dist of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </select> 
                                                </div>
                                            </div>   
                                
                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Zip / Postal:	
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="postalCodeBilling"
                                                        name="postalCodeBilling"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.billingPostalCode}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Phone:		
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="phoneBilling"
                                                        name="phoneBilling"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.billingPhone}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Email:			
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 my-2">
                                                    <input
                                                        type="text"
                                                        id="emailBilling"
                                                        name="emailBilling"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.billingEmail}
                                                        />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart__info__shipping__inputs col-6 m-0 p-0 pl-1">

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        First Name:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="fnameShipping"
                                                        name="fnameShipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingFirstName}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Last Name:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="lnameShipping"
                                                        name="lnameShipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingLastName}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Address:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="address1Shipping"
                                                        name="address1Shipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingAddress1}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Address 2:
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="address2Shipping"
                                                        name="address2Shipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingAddress2}
                                                        placeholder="Optional"
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        City:	
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="cityShipping"
                                                        name="cityShipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingCity}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        State:	
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <select className="cart__shipping__select w-100" name="stateShipping" id="stateShipping">
                                                        <option value="">Select</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DoC">Dist of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </select> 
                                                </div>
                                            </div>  
                                    
                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Zip / Postal:	
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="postalCodeShipping"
                                                        name="postalCodeShipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingPostalCode}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Phone:		
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 mt-2">
                                                    <input
                                                        type="text"
                                                        id="phoneShipping"
                                                        name="phoneShipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingPhone}
                                                        />
                                                </div>
                                            </div>

                                            <div className="cart__billing__input d-flex justify-content-end align-items-center w-100">
                                                <div className="d-flex col-3 m-0 p-0">
                                                    <p className="text-right w-100 m-0 p-0 pr-1">
                                                        Email:			
                                                    </p>
                                                </div>
                                                <div className="d-flex col-9 m-0 p-0 pr-5 my-2">
                                                    <input
                                                        type="text"
                                                        id="emailShipping"
                                                        name="emailShipping"
                                                        className="item__quantity form-control m-0 p-0"
                                                        value={orderCart.shippingEmail}
                                                        />
                                                </div>
                                            </div>
                                            
                                        </div>  
                                        
                                    </div>


                                        <div className="cart__main__content__description m-0 p-0 mt-4">
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

                                        {_products.map((product, itemCounter) => (<CartItem product={product} itemCounter={itemCounter} itemSubtotal={itemSubtotal} key={product.productId}  />), itemSubtotal+=products[itemCounter].price * orderItems[itemCounter].qty, itemCounter++)}

                    

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

                                    <div className="cart__main__content__description m-0 p-0 mt-4">
                                        <div className="cart__info__description col-12 p-1">
                                            <p className="text-left p-0 m-0">
                                                Comments or Additional Information 
                                            </p>    
                                        </div>       
                                    </div>

                                    <div className="cart__main__content__subtotal m-0 p-0 py-2">
                                        <div className="cart__info__description col-7 m-0 p-0 ml-1">
                                            <textarea 
                                                className="form-control"
                                                id="notes"
                                                name="notes"
                                                value="123"
                                                >
                                            </textarea>
                                        </div>    
                                    </div>

                                    <div className="cart__main__bottom__links m-0 p-0 py-3 mt-4">
                                        <div className="cart__info__description col-7 m-0 p-0">
                                        </div>    
                                        <div className="cart__info__links col-5 m-0 p-0">
                                            <Link to="/Cart/Cart">
                                                <img src="/img/Back_button.png" alt="Back" />
                                            </Link>
                                            &nbsp;
                                            <button className="m-0 p-0" type="submit">
                                                <img src="/img/Checkout_button.png" alt="Checkout" />
                                            </button> 
                                            <input type="hidden" id="userID" name="userID" value="123" />
                                        </div>
                                    </div>

                                </form>

                                </div>

                        </div>
                    </section>
                </section>
            </main>
        </>
        )
    }

export default CartCheckoutPage;