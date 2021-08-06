import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrderItems, qtyOnChange } from "../redux/cartSlice";

const CartItem = (props) => {
    const _orderItems = useSelector(selectOrderItems);
    const dispatch = useDispatch();

    const [itemQty, setItemQty] = useState(_orderItems[props.itemCounter].qty);

    console.log("itemCounter:" + props.itemCounter);

    return (
        <>
            <div className="cart__main__content__item m-0 p-0">
                <div className="cart__info__description__item col-6 m-0 p-0 pl-1">
                    <p className="text-left p-0 m-0 py-3">
                        {props.product.name}
                    </p>    
                </div>  
                <div className="cart__info__description__item__two col-2 m-0 p-0 py-3">
                    <p className="text-center p-0 m-0 py-4">
                        ${props.product.price.toFixed(2)}
                    </p>    
                </div>  
                <div className="cart__info__description__item__two col-2 m-0 p-0 py-3">
                        <div className="text-center p-0 m-0 py-3">
                            <input
                                type="text"
                                id={props.itemCounter}
                                name={props.product.sku + props.product.sortOrder}
                                className="item__quantity text-center"
                                style={{width: "30px"}}
                                placeholder="0"
                                onKeyUp={() => dispatch(qtyOnChange(Number(itemQty))) }
                                onChange={(e) => setItemQty(e.target.value)}
                                value={itemQty}
                            />
                        <input type="hidden" id="userID" name="userID" value="" />
                        <input type="hidden" id="prodID" name="prodID" value={props.product.productId} />
                        <input type="hidden" id="orderItemId" name="orderItemId" value={_orderItems[props.itemCounter].orderItemId} />
                        </div> 
                </div>
                <div className="cart__info__description__item__two col-2 m-0 p-0 py-3">
                    <div className="text-center p-0 m-0">
                        <p className="text-center m-0 p-0">
                            ${(props.product.price * itemQty).toFixed(2)}
                            </p>
                            <button className="remove__button mt-3" type="submit"> 
                                <img className="" src="/img/Remove_Button.png" alt="Remove Items" />
                            </button>
                    </div>    
                </div> 
                
            </div>
        </>
    )
}

export default CartItem;