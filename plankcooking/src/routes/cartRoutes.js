const express = require("express");

const cartController = require("../controllers/cartController");

const cartRouter = express.Router();

function router(){
    const {putUpdateCart, getCartList, deleteOrderItemFromCart, putUpdateCartCheckout, putCartPurchase} = cartController();

    cartRouter.route("/cart/update").put(putUpdateCart);
    cartRouter.route("/cart/list").get(getCartList);
    cartRouter.route("/cart/add").put(putUpdateCart);
    cartRouter.route("/cart/delete").delete(deleteOrderItemFromCart);
    cartRouter.route("/cart/checkout/update").put(putUpdateCartCheckout);
    cartRouter.route("/cart/purchase").put(putCartPurchase);

    return cartRouter;
}

module.exports = router;