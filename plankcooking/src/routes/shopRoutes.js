const express = require("express");

const shopController = require("../controllers/shopController");

const shopRouter = express.Router();

function router(){
    const {getProductsByCategoryId, postAddToCart} = shopController();

    shopRouter.route("/products/:categoryId").get(getProductsByCategoryId);
    shopRouter.route("/cart/add").post(postAddToCart);

    return shopRouter;
}

module.exports = router;