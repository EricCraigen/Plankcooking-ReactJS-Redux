import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../redux/shopSlice";
import { selectOrderItems, orderItemAdded, selectOrderCart, orderCartCreated } from "../redux/cartSlice";

const StandardShopItem = (props) => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const orderItems = useSelector(selectOrderItems);
    const orderCart = useSelector(selectOrderCart);

    const orderCartId = 1
    const _products = [];

    products.map(product => {
        if (product.categoryId === 2) {
            _products.push(product);
        }
        return _products;
    });

    const [itemQty, setItemQty] = useState(0);
    const [cartCreated, setCartCreated] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const [errors, setErrors] = useState([]);

    function inputHasChanged(e) {
        setItemQty(e.target.value);
    }

    function addToCartButtonClicked(e)  {
        e.preventDefault();
        if (parseInt(itemQty) === 0) {
            setErrors(["Please enter a Qty"])
            setAddedToCart(false)
        } else {
            setCartLoading(true);
            dispatch(
                orderItemAdded(
                    {
                        orderItemId: orderItems.length + 1,
                        productId: parseInt(e.target.elements.productId.value),
                        orderCartId: parseInt(e.target.elements.orderCartId.value),
                        qty: parseInt(itemQty)
                    }
                )
                
            );
            if (orderCart.length === 0) {
                dispatch(
                orderCartCreated(
                        {
                            orderCartId: parseInt(e.target.elements.orderCartId.value),
                            status: null,
                            notes: null,
                            purchaseDate: null,
                            history: null,
                            taxes: null,
                            orderTotal: null,
                            shippingFirstName: null,
                            shippingLastName: null,
                            shippingAddress1: null,
                            shippingAddress2: null,
                            shippingCity: null,
                            shippingState: null,
                            shippingPostalCode: null,
                            shippingPhone: null,
                            shippingEmail: null,
                            billingAddress1: null,
                            billingAddress2: null,
                            billingCity: null,
                            billingState: null,
                            billingPostalCode: null,
                            uniqueIdentifier: null,
                            websiteId: null,
                            dateCreated: null,
                            billingFirstName: null,
                            billingLastName: null,
                            billingPhone: null,
                            billingEmail: null,
                            shippingCountry: null,
                            billingCountry: null,
                            authorizationCode: null,
                            transactionId: null,
                            shippingValidation: null,
                            shippingCost: null,
                            shippingType: null,
                            creditCardType: null
                        }
                    )
                );
            }
            setCartCreated(true);
            setErrors([]);
            setTimeout(function() {setCartLoading(false)}, 500);
            setTimeout(function() {setAddedToCart(true)}, 500);
        }
    }
    

    return (
        <>
        <form onSubmit={addToCartButtonClicked} id="addToCartForm">
            <div className="shop__item">
                <h6 className="item__title">
                    {props.product.name}
                </h6>
                <h6 className="item__title__filler"></h6>
                <p className="item__description">
                    {props.product.description} 
                </p>
                <div className="item__form">
                    <p className="item__price">
                        Price: ${props.product.price.toFixed(2)}
                    </p>
                    <div>
                        <label className="item__qty" htmlFor="item__gty">
                        Quantity:
                        </label>
                        <input type="text"
                        id="itemQty"
                        onChange={e => inputHasChanged(e)}
                        placeholder="0"
                        />
                    </div>
                    <button className="p-0 my-2" type="submit">
                        <img src="/img/AddToCart_button.png" alt="Add to Cart" />
                    </button>
                    <p className={cartLoading === false ? "d-none" : ""}>
                        <img className="loadingSpinner" src="/img/loadingSpinner.gif" alt="Updating..." />&nbsp;Updating...
                    </p>
                    <div className="loadingAndAddedToCart">
                        <p className={addedToCart === false ? "d-none" : ""}>
                            Added to cart - <Link to="/Cart/Cart" className="addedToCartLink">View Cart</Link>
                        </p>
                        <p className="error">
                            {errors.length > 0 ? errors[0] : ""}
                        </p>
                    </div>
                    <img src={props.product.imagePath} alt={props.product.iamgePath ? props.product.name : ""} />
                </div>
                <input type="hidden" id="productId" name="productId" value={props.product.productId} />
                <input type="hidden" id="orderCartId" name="orderCartId" value={cartCreated ? orderCartId : orderCart.length + 1} />
            </div>
        </form>
        </>
    )
}

export default StandardShopItem;