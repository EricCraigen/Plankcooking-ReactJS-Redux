const sql = require("mssql");

const shopController = () => {

    getProductsByCategoryId = (req, res) => {
        const request = new sql.Request();
            const categoryId = req.params.categoryId;
            (async() => {
                const request = new sql.Request();
                const productsByIdQuery = await request.input("categoryId", sql.Int, req.params.categoryId)
                                                        .query("SELECT * FROM [dbo].[Product] where [CategoryID] = @categoryId");
                const productsByCategoryId = productsByIdQuery.recordset;
                res.status(200).json(productsByCategoryId);
            })();
    }

    postAddToCart = (req, res) => {
        const request = new sql.Request();
        let oldUniqueIdentifier = req.app.settings.uniqueIdentifier;
        (async() => {
            const orderCartQuery = await request.input("oldUniqueIdentifier", sql.NVarChar, oldUniqueIdentifier)
                .query("SELECT * FROM [dbo].[OrderCart] where [UniqueIdentifier] = @oldUniqueIdentifier");
            console.log(orderCartQuery.recordset[0]);
            const orderCart = orderCartQuery.recordset[0];
            if (!orderCart) {
                const newUniqueIdentifier = oldUniqueIdentifier;
                (async() => {
                    const orderCartQuery = await request.input("newUniqueIdentifier", sql.NVarChar, newUniqueIdentifier)
                        .query("INSERT INTO [dbo].[OrderCart]([Status],[Notes],[PurchaseDate],[History],[Taxes],[OrderTotal],[ShippingFirstName],[ShippingLastName],[ShippingAddress1],[ShippingAddress2],[ShippingCity],[ShippingState],[ShippingPostalCode],[ShippingPhone],[ShippingEmail],[BillingAddress1],[BillingAddress2],[BillingCity],[BillingState],[BillingPostalCode],[UniqueIdentifier],[WebsiteID],[DateCreated],[BillingFirstName],[BillingLastName],[BillingPhone],[BillingEmail],[ShippingCountry],[BillingCountry],[AuthorizationCode],[TransactionID],[ShippingValidation],[ShippingCost],[ShippingType],[CreditCardType]) VALUES (0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,@newUniqueIdentifier,1,getDate(),null,null,null,null,null,null,null,null,null,null,null,null)");
                })();
                const orderItemQuery = await request.input("orderCartId1", sql.Int, req.body.OrderCartID)
                                                .input("productId1", sql.Int, req.body.ProductID)
                                                .query("SELECT * FROM [ECraigen_w20].[dbo].[OrderItem] WHERE [OrderCartID]=@orderCartId1 AND [ProductID]=@productId1");
                const orderItem = orderItemQuery.recordset[0];
                if (!orderItem) {
                    console.log(orderItem);
                    const orderItemInsertQuery = await request.input("productId", sql.Int, req.body.ProductID)
                        .input("orderCartId", sql.Int, req.body.OrderCartID)
                        .input("qty", sql.Int, req.body.Qty)
                        .query("INSERT INTO [dbo].[orderItem] (ProductID, OrderCartID, Qty) VALUES (@productId, @OrderCartID, @Qty)", (err, result, fields) => {
                            if (err) {
                            return res.status(400).json(err);
                            } else if (result.rowsAffected == 0) {
                            return res.sendStatus(404);
                            } else {
                            return res.sendStatus(204);
                            }
                        });
                } 
            } else {
                const orderItemQuery2 = await request.input("orderCartId1", sql.Int, req.body.OrderCartID)
                                                .input("productId1", sql.Int, req.body.ProductID)
                                                .query("SELECT * FROM [ECraigen_w20].[dbo].[OrderItem] WHERE [OrderCartID]=@orderCartId1 AND [ProductID]=@productId1");
                const orderItem2 = orderItemQuery2.recordset[0];
                
                if (orderItem2) {
                    const orderItemQuery2 = await request.input("productId", sql.Int, req.body.ProductID)
                        .input("orderCartId", sql.Int, req.body.OrderCartID)
                        .input("qty", sql.Int, req.body.Qty)
                        .query("UPDATE [ECraigen_w20].[dbo].[OrderItem] SET [Qty] = @qty WHERE [OrderCartID] = @orderCartId AND [ProductID] = @productId", (err, result, fields) => {
                            if (err) {
                            return res.status(400).json(err);
                            } else if (result.rowsAffected == 0) {
                            return res.sendStatus(404);
                            } else {
                            return res.sendStatus(204);
                            }
                        });
                } else {
                    const orderItemInsertQuery = await request.input("productId", sql.Int, req.body.ProductID)
                        .input("orderCartId", sql.Int, req.body.OrderCartID)
                        .input("qty", sql.Int, req.body.Qty)
                        .query("INSERT INTO [dbo].[orderItem] (ProductID, OrderCartID, Qty) VALUES (@productId, @OrderCartID, @Qty)", (err, result, fields) => {
                            if (err) {
                            return res.status(400).json(err);
                            } else if (result.rowsAffected == 0) {
                            return res.sendStatus(404);
                            } else {
                            return res.sendStatus(204);
                            }
                        });
                }
            }
        })();
    }

    return {
        getProductsByCategoryId,
        postAddToCart,
    };
}

module.exports = shopController;