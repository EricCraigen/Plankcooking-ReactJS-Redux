import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/shopSlice";

import StandardShopItem from "./StandardShopItem";

const CookBooksPage = () => {
    document.title = "Shop | Plankcooking.com"
    
    const products = useSelector(selectProducts);
    let itemCounter = 0;
    const _products = [];
    products.map(product => {
        if (product.categoryId === 2) {
            _products.push(product);
        }
        return _products;
    });

    return (
        <>
            <main className="shop__wrapper" id="toggle__wrapper">

                <section className="shop__menu">
                    <img src="/img/Shop_MenuHeader.png" alt="Shop Menu Header" />
                    <Link to="/Shop/SpiceRubs">SPICE RUBS</Link>
                    <Link to="/Shop/Cookbooks">COOKBOOKS</Link>
                    <Link to="/Shop/BakingPlanks">BAKING PLANKS</Link>
                    <Link to="/Shop/BBQPlanks">BBQ PLANKS</Link>
                    <Link className="last__menu__link" to="/Shop/NutDriver">NUT DRIVER</Link>
                </section>

                <section className="dropdown">
                <div className="dropdown__wrapper">
                    <button
                    className="btn shop__dropdown__button text-light dropdown-toggle px-5 my-4"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Shop
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/Shop/SpiceRubs">SPICE RUBS</Link>
                    <Link className="dropdown-item" to="/Shop/Cookbooks">COOKBOOKS</Link>
                    <Link className="dropdown-item" to="/Shop/BakingPlanks">BAKING PLANKS</Link>
                    <Link className="dropdown-item" to="/Shop/BBQPlanks">BBQ PLANKS</Link>
                    <Link className="dropdown-item" to="/Shop/NutDriver">NUT DRIVER</Link>
                    </div>
                </div>
                </section>

                <section className="shop__content__wrapper">
                <div className="item__rotator__wrapper">
                    <img className="item__rotator" src="/img/Cookbooks_Header.png" alt="Cookbooks" />
                </div>

                    <div className="shop__items__content pt-3 px-4">
                        {_products.map((product, itemCounter) => (<StandardShopItem product={product} itemCounter={itemCounter} key={product.productId} />), itemCounter++)}
                    </div>
                </section>

            </main>
        </>
    )
}

export default CookBooksPage;