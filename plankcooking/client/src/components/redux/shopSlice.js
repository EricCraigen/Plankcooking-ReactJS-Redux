import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice(
    {
        name: "shop",
        initialState: {
            products: [
                {
                    productId: 1,
                    categoryId: 1,
                    name: "Ancho Chili Rub",
                    description: "Just a little spice, the Ancho Chili Rub has a rich-smoky chili flavor, with a very mild heat. Use it on chicken, pork, salmon, prawns, and ribs. The smoked ancho chili adds a smoky richness to the blend while the chipotle chili adds just a little zip.",
                    price: 6.00,
                    priceDescription: "NET WT. 3.65 oz's",
                    sortOrder: 1,
                    active: true,
                    ounces: 3.65,
                    imagePath: "/img/AnchoChiliRub.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "SR-ACR"
                },
                {
                    productId: 2,
                    categoryId: 1,
                    name: "Salmon Rub",
                    description: "Chef Howie’s Original Signature Salmon Rub works great with the cedar, alder or BBQ planks. Imparts a subtle aromatic flavor to rich salmon. Made from dried herbs, fresh ground spices, brown sugar, kosher salt, garlic and lemon. Also great for searing, grilling and baking.",
                    price: 6.00,
                    priceDescription: "NET WT. 3.65 oz's",
                    sortOrder: 2,
                    active: true,
                    ounces: 3.65,
                    imagePath: "/img/SalmonRub.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "SR-SAMR"
                },
                {
                    productId: 3,
                    categoryId: 1,
                    name: "Porcini Mushroom Rub",
                    description: "Chef Howie’s Porcini Mushroom Rub adds a rich mushroom flavor with a subtle hint of herb. Great with poultry, fish, seafood, pork and beef. Made from imported Italian porcini mushrooms, herbs, kosher salt, spices, and a hint of lemon.",
                    price: 12.50,
                    priceDescription: "NET WT. 2.0 oz's",
                    sortOrder: 3,
                    active: true,
                    ounces: 2.0,
                    imagePath: "/img/MushroomSpice.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "SR-PMR"
                },
                {
                    productId: 4,
                    categoryId: 1,
                    name: "BBQ Spice Rub",
                    description: "Although Chef Howie’s BBQ Spice Rub is an aromatic blend of unique spices, star anise, ginger, allspice and more. Originally created for his Baby Back Ribs, we’ve since discovered that it works great for chicken, pork chops, ribs and roasts as well. Made from a unique blend of aromatic spices, brown sugar, kosher salt, onion and garlic.",
                    price: 6.00,
                    priceDescription: "NET WT. 3.65 oz's",
                    sortOrder: 4,
                    active: true,
                    ounces: 3.65,
                    imagePath: "/img/BBQSpiceRub.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "SR-BBQSR"
                },
                {
                    productId: 5,
                    categoryId: 1,
                    name: "SPORT Steak Seasoning Rub",
                    description: "The perfect seasoning for great steaks. A nice blend of dried herbs, onion, garlic, spices and kosher salt. Created by Chef Howie’s youngest son as a gift for his teachers, it was so loved that Chef Howie decided to use it at SPORT.",
                    price: 5.00,
                    priceDescription: "NET WT. 3.0 oz's",
                    sortOrder: 5,
                    active: true,
                    ounces: 3.0,
                    imagePath: "/img/SportSteakRub.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "SR-SSR"
                },
                {
                    productId: 6,
                    categoryId: 1,
                    name: "Gift Pack for All Four Rubs",
                    description: "All four the 3 Chef’s in a Tub, Spice Rubs and Seasoning Blends. The Ancho Chili Rub, Salmon Rub, Mushroom Rub, and the BBQ Spice Rub.",
                    price: 26.00,
                    priceDescription: null,
                    sortOrder: 6,
                    active: true,
                    ounces: 12.00,
                    imagePath: "/img/FourSpicesPack.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "SR-GP"
                },
                {
                    productId: 7,
                    categoryId: 2,
                    name: "Passion & Palate",
                    description: "Chef Howie’s New Cookbook Passion & Palate is a collection of stories and recipes from Chef John Howie. The chef/proprietor who brought you the Award winning restaurants, Seastar Restaurant & Raw Bar, John Howie Steak, SPORT Restaurant & Bar, Adriatic Grill, Italian Cuisine & Wine Bar, and the culinary website plankcooking.com, now shares his creative culinary exploits with you. Passion & Palate will excite the senses with over 240 recipes, and 88 full color pictures. The recipe range is very eclectic with everything from some of Chef Howie’s best plank cooking recipes, to amazing soups, salads, seafood, meats, pastas, poultry, ceviche’s, poke, and sushi. All recipes were tested by home cooks. So you can be assured that these recipes will work in your home kitchen. Passion & Palate is the culmination of Chef Howie’s dream to bring exciting cuisine to the homes of his restaurant guests and fan of good food everywhere.",
                    price: 42.00,
                    priceDescription: null,
                    sortOrder: 1,
                    active: true,
                    ounces: 16.0,
                    imagePath: "/img/passion_palate_cover.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "CB-PP"
                },
                {
                    productId: 8,
                    categoryId: 2,
                    name: "The Cedar Plank Cookbook",
                    description: "Chef Howie’s original cookbook with fifteen recipes for the cedar plank. Including his signature salmon, crab stuffed mushrooms, halibut with lemon-chardonnay sauce, sage rubbed pork loin roast with cider glaze, Cornish game hens with apple-cranberry stuffing, and many more.",
                    price: 6.50,
                    priceDescription: null,
                    sortOrder: 2,
                    active: false,
                    ounces: 6.00,
                    imagePath: "/img/CedarCookbook.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "CB-CPB"
                },
                {
                    productId: 9,
                    categoryId: 2,
                    name: "The Plank Cookbook",
                    description: "This is Chef Howie’s second cookbook with fifteen new recipes for your cedar, alder and BBQ grilling planks. Although each of the recipes in this cookbook were designed to be used with specific planks, they are not exclusive to the planks they were created for and can be used with either the cedar, alder or BBQ grilling planks. Includes recipes for lemon-garlic prawns, hazelnut salmon, lamb chops pepperonata, pork tenderloin with mango salsa, caramelized onion halibut and plank roasted turkey breast with cranberry compote, just to name a few.",
                    price: 6.50,
                    priceDescription: null,
                    sortOrder: 3,
                    active: true,
                    ounces: 6.0,
                    imagePath: "/img/PlankCookbook.png",
                    handlingCost: 0.00,
                    taxExempt: true,
                    sku: "CB-PCB"
                },
                {
                    productId: 10,
                    categoryId: 2,
                    name: "Both Plank Cookbooks",
                    description: "Both of Chef Howie’s Plank Cookbooks, The Cedar Plank Cookbook and The Plankcooking Cookbook, are included with this purchase.",
                    price: 12.00,
                    priceDescription: null,
                    sortOrder: 4,
                    active: false,
                    ounces: 12.0,
                    imagePath: null,
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "CB-BCB"
                },
                {
                    productId: 11,
                    categoryId: 3,
                    name: "Small Cedar Plank",
                    description: "The Small Cedar Plank is primarily used to prepare servings for one or two people (13\"x9\"x1.5\").",
                    price: 32.00,
                    priceDescription: null,
                    sortOrder: 1,
                    active: true,
                    ounces: 12.0,
                    imagePath: "/img/SmallCedarPlank.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BP-SCP"
                },
                {
                    productId: 12,
                    categoryId: 3,
                    name: "Small Cedar Plank with both cookbooks",
                    description: null,
                    price: 43.00,
                    priceDescription: null,
                    sortOrder: 2,
                    active: false,
                    ounces: 18.0,
                    imagePath: null,
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BP-SCPWCB"
                },
                {
                    productId: 13,
                    categoryId: 3,
                    name: "Large Cedar Plank",
                    description: "The Large Cedar Plank is primarily used in cooking meals for two or more people (16\"x9\"x1.5\").",
                    price: 38.00,
                    priceDescription: null,
                    sortOrder: 3,
                    active: true,
                    ounces: 16.0,
                    imagePath: "/img/LargeCedarPlank.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BP-LCP"
                },
                {
                    productId: 14,
                    categoryId: 3,
                    name: "Large Cedar Plank with both cookbooks",
                    description: null,
                    price: 48.00,
                    priceDescription: null,
                    sortOrder: 4,
                    active: false,
                    ounces: 24.0,
                    imagePath: null,
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BP-LCPWCB"
                },
                {
                    productId: 15,
                    categoryId: 3,
                    name: "Alder Plank",
                    description: "The Alder Planks are milder than the cedar planks, and impart a subtle woodsy flavor and aroma to anything roasted on them. Our alder planks are made from clear kiln dried alder. They come in one size only 16\"x7\"x1.5\".",
                    price: 42.00,
                    priceDescription: null,
                    sortOrder: 5,
                    active: true,
                    ounces: 16.0,
                    imagePath: "/img/LargeAlderPlank.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BP-AP"
                },
                {
                    productId: 16,
                    categoryId: 3,
                    name: "Alder Plank with both cookbooks",
                    description: null,
                    price: 52.00,
                    priceDescription: null,
                    sortOrder: 6,
                    active: false,
                    ounces: 24.0,
                    imagePath: null,
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BP-APWCB"
                },
                {
                    productId: 17,
                    categoryId: 4,
                    name: "Cedar Barbecue Grilling Planks",
                    description: "Made for use on your BBQ grill. Incredible smoky cedar flavors are infused into your foods. Convenient size, one size fits most BBQ grills. Use with gas or charcoal grills. Package includes 6 one-time use BBQ planks, and two recipes. Each plank can be used to cook for up to four eight-ounce portions. Make your summer barbeques unique and flavorful with the Cedar Barbeque Grilling Planks.",
                    price: 15.00,
                    priceDescription: null,
                    sortOrder: 1,
                    active: true,
                    ounces: 18.0,
                    imagePath: "/img/BBQPlank.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "BQP-CBGP"
                },
                {
                    productId: 18,
                    categoryId: 5,
                    name: "Nut Driver",
                    description: "The nut driver is used to tighten the metal bolts that run through the baking planks. The bolts are there to help keep the plank from splitting and warping. Used with baking planks only, no bolts on the BBQ planks.",
                    price: 3.00,
                    priceDescription: null,
                    sortOrder: 1,
                    active: true,
                    ounces: 6.0,
                    imagePath: "/img/NutDriver.png",
                    handlingCost: 0.00,
                    taxExempt: false,
                    sku: "ND-ND1"
                }
            ],
            categories: [
                {
                    categoryId: 1,
                    name: "Spice Rubs",
                    sortOrder: 1,
                    websitePath: "/Shop/SpiceRubs",
                    description: "Chef Howie created 3 Chefs In A Tub spice rubs and seasoning blends to bring professional flavor to home cooking. Very easy to use. Just season cook and serve. Made with all natural ingredients, dried herbs and mushrooms, spices, lemon, garlic, onion, brown sugar and kosher salt, no MSG or other chemical additives.",
                    imagePath: "/img/SpiceRubs_Header.png"
                },
                {
                    categoryId: 2,
                    name: "Cookbooks",
                    sortOrder: 2,
                    websitePath: "/Shop/Cookbooks",
                    description: null,
                    imagePath: "/img/Cookbooks_Header.png"
                },
                {
                    categoryId: 3,
                    name: "Baking Planks",
                    sortOrder: 3,
                    websitePath: "/Shop/BakingPlanks",
                    description: "Cedar and Alder planks impart a subtle yet full flavored aroma to anything roasted on them. Our planks are made from clear kiln dried Western Red Cedar and Alder. Cedar roasting planks come in two sizes. Alder planks are available in one size only.",
                    imagePath: "/img/BakingPlanks_Header.png.png"
                },
                {
                    categoryId: 4,
                    name: "BBQ Planks",
                    sortOrder: 4,
                    websitePath: "/Shop/BBQPlanks",
                    description: null,
                    imagePath: "/img/BBQPlanks_Header.png"
                },
                {
                    categoryId: 5,
                    name: "Nut Driver",
                    sortOrder: 5,
                    websitePath: "/Shop/NutDriver",
                    description: null,
                    imagePath: "/img/Cookbooks_Header.png"
                },
            ],
        },
        reducers: {
            todo: (state, action ) => {
                // TODO
            },
        }
    }
)

export const selectProducts = state => state.shop.products;
export const {todo} = shopSlice.actions;

export default shopSlice.reducer;