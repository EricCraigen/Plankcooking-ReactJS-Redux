import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    document.title = "Shop | Plankcooking.com";
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

                <section className="shop__home__wrapper">
                    <div className="shop__home__content pt-3 px-4">
                        <h5 className="home__title">
                            PLANKCOOKING PRODUCTS
                        </h5>

                        <div className="shop__cubes__wrapper mt-2 mb-5">
                            <Link to="/Shop/SpiceRubs">
                            <img src="/img/SpiceRubs_cube.png" alt="SpiceRubs" />
                            </Link>
                            <Link to="/Shop/BakingPlanks">
                            <img src="/img/BakingPlanks_cube.png" alt="BakingPlanks" />
                            </Link>
                            <Link to="/Shop/Cookbooks">
                            <img src="/img/Cookbooks_cube.png" alt="Cookbooks" />
                            </Link>
                            <Link to="/Shop/BBQPlanks">
                            <img src="/img/BBQ_Planks_cube.png" alt="BBQ_Planks" />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Shop;