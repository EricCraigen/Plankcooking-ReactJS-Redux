const sql = require("mssql");

const cartController = () => {

    putUpdateCart =(req, res) => {
        const request = new sql.Request();
        (async() => {
            const orderItemQuery = await request.input("orderItemId", sql.Int, req.body.OrderItemID)
                .input("qty", sql.Int, req.body.Qty)
                .query("UPDATE [ECraigen_w20].[dbo].[OrderItem] SET [Qty] = @qty WHERE [OrderItemID]=@orderItemId", (err, result, fields) => {
                    if (err) {
                        return res.status(400).json(err);
                    } else if (result.rowsAffected == 0) {
                        return res.sendStatus(404);
                    } else {
                        return res.sendStatus(204);
                    }
                    });
        })();
    }

    getCartList = (req, res) => {
        const request = new sql.Request();
            (async() => {
                const request = new sql.Request();
                const orderCartQuery = await request.input("orderCartId", sql.Int, req.body.OrderCartID)
                    .query("SELECT * FROM [dbo].[OrderItem] where [OrderCartID] = @orderCartId", (err, result, fields) => {
                        if (err) {
                        return res.status(400).json(err);
                        } else if (result.rowsAffected == 0) {
                        return res.sendStatus(404);
                        } else {
                        return res.status(200).json(result.recordset);
                        }
                    });                                    
            })();

    }

    putUpdateCart =(req, res) => {
        const request = new sql.Request();
        (async() => {
            const orderItemQuery = await request.input("orderItemId", sql.Int, req.body.OrderItemID)
                .input("qty", sql.Int, req.body.Qty)
                .query("UPDATE [ECraigen_w20].[dbo].[OrderItem] SET [Qty] = @qty WHERE [OrderItemID]=@orderItemId", (err, result, fields) => {
                    if (err) {
                    return res.status(400).json(err);
                    } else if (result.rowsAffected == 0) {
                    return res.sendStatus(404);
                    } else {
                    return res.sendStatus(204);
                    }
                });
        })();
    }

    deleteOrderItemFromCart = (req, res) => {
        const request = new sql.Request();
        (async() => {
            const orderItemQuery = await request.input("orderItemId", sql.Int, req.body.OrderItemID)
                .query("DELETE FROM [ECraigen_w20].[dbo].[OrderItem] WHERE [OrderItemID]=@orderItemId", (err, result, fields) => {
                    if (err) {
                    return res.status(400).json(err);
                    } else if (result.rowsAffected == 0) {
                    return res.sendStatus(404);
                    } else {
                    return res.sendStatus(204);
                    }
                });
        })();
    }

    putUpdateCartCheckout = (req, res) => {
        const request = new sql.Request();
        (async() => {
            const orderItemQuery = await request.input("orderCartId", sql.Int, req.body.OrderCartID)
                .input("shippingFirstname", sql.NVarChar, req.body.ShippingFirstName)
                .input("shippingLastname", sql.NVarChar, req.body.ShippingLastName)
                .input("shippingAddress1", sql.NVarChar, req.body.ShippingAddress1)
                .input("shippingAddress2", sql.NVarChar, req.body.ShippingAddress2)
                .input("shippingCity", sql.NVarChar, req.body.ShippingCity)
                .input("shippingState", sql.NVarChar, req.body.ShippingState)
                .input("shippingPostalCode", sql.NVarChar, req.body.ShippingPostalCode)
                .input("shippingPhone", sql.NVarChar, req.body.ShippingPhone)
                .input("shippingEmail", sql.NVarChar, req.body.ShippingEmail)
                .input("shippingCountry", sql.NVarChar, req.body.ShippingCountry)
                .input("billingFirstname", sql.NVarChar, req.body.BillingFirstName)
                .input("billingLastname", sql.NVarChar, req.body.BillingLastName)
                .input("billingAddress1", sql.NVarChar, req.body.BillingAddress1)
                .input("billingAddress2", sql.NVarChar, req.body.BillingAddress2)
                .input("billingCity", sql.NVarChar, req.body.BillingCity)
                .input("billingState", sql.NVarChar, req.body.BillingState)
                .input("billingPostalCode", sql.NVarChar, req.body.BillingPostalCode)
                .input("billingPhone", sql.NVarChar, req.body.BillingPhone)
                .input("billingEmail", sql.NVarChar, req.body.BillingEmail)
                .input("billingCountry", sql.NVarChar, req.body.BillingCountry)
                .input("notes", sql.NVarChar, req.body.Notes)
                .query("UPDATE [ECraigen_w20].[dbo].[OrderCart] SET [ShippingFirstName] = @shippingFirstname, [ShippingLastName] = @shippingLastName, [ShippingAddress1] = @shippingAddress1, [ShippingAddress2] = @shippingAddress2, [ShippingCity] = @shippingCity, [ShippingState] = @shippingState, [ShippingPostalCode] = @shippingPostalCode, [ShippingPhone] = @shippingPhone, [ShippingEmail] = @shippingEmail, [ShippingCountry] = @shippingCountry, [BillingFirstName] = @billingFirstname, [BillingLastName] = @billingLastName, [BillingAddress1] = @billingAddress1, [BillingAddress2] = @billingAddress2, [BillingCity] = @billingCity, [BillingState] = @billingState, [BillingPostalCode] = @billingPostalCode, [BillingPhone] = @billingPhone, [BillingEmail] = @billingEmail, [BillingCountry] = @billingCountry, [Notes] = @notes  WHERE [OrderCartID]=@orderCartId", (err, result, fields) => {
                    if (err) {
                    return res.status(400).json(err);
                    } else if (result.rowsAffected == 0) {
                    return res.sendStatus(404);
                    } else {
                    return res.sendStatus(204);
                    }
                });
        })();
    }

    putCartPurchase = (req, res) => {
        const request = new sql.Request();
        (async() => {
            const orderItemQuery = await request.input("orderCartId", sql.Int, req.body.OrderCartID)
                .input("taxes", sql.Money, req.body.Taxes)
                .input("orderTotal", sql.NVarChar, req.body.OrderTotal)
                .input("shippingCost", sql.NVarChar, req.body.ShippingCost)
                .input("shippingType", sql.NVarChar, req.body.ShippingType)
                .input("creditCartType", sql.NVarChar, req.body.CreditCardType)
                .query("UPDATE [ECraigen_w20].[dbo].[OrderCart] SET [Status] = 1, [PurchaseDate] = getDate(), [Taxes] = @taxes, [OrderTotal] = @orderTotal, [ShippingCost] = @shippingCost, [ShippingType] = @shippingType, [CreditCardType] = @creditCartType WHERE [OrderCartID]=@orderCartId", (err, result, fields) => {
                    if (err) {
                    return res.status(400).json(err);
                    } else if (result.rowsAffected == 0) {
                    return res.sendStatus(404);
                    } else {
                    return res.sendStatus(204);
                    }
                });
        })();
    }

    return {
        putUpdateCart,
        getCartList,
        putUpdateCart,
        deleteOrderItemFromCart,
        putUpdateCartCheckout,
        putCartPurchase
    };
}

module.exports = cartController;