import { React } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import HomePage from "./single__pages/HomePage";
import AboutPage from "./single__pages/AboutPage";
import ReviewsPage from "./single__pages/ReviewsPage";
import ContactPage from "./single__pages/ContactPage";
import TestimonialsPage from "./single__pages/TestimonialsPage";
import RecipesPage from "./single__pages/RecipesPage";
import ShopPage from "./shop/ShopPage";
import CookBooksPage from "./shop/CookBooksPage";
import CartPage from "./cart/CartPage";
import CartCheckoutPage from "./cart/CartCheckoutPage";

import "../css/global.css";
import "../css/index.css";
import "../css/contact.css";
import "../css/shop.css";
import "../css/cart.css";
import "../css/recipes.css";
import "../css/about.css";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    return (
        <>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/About" component={AboutPage} />
                    <Route path="/Reviews" component={ReviewsPage} />
                    <Route path="/Contact" component={ContactPage} />
                    <Route path="/Testimonials" component={TestimonialsPage} />
                    <Route path="/Recipes" component={RecipesPage} />
                    <Route exact path="/Shop/Products" component={ShopPage} />
                    <Route path="/Shop/Cookbooks" component={CookBooksPage} />
                    <Route path="/Cart/Cart" component={CartPage} />
                    <Route path="/Cart/Checkout" component={CartCheckoutPage} />
                </Switch>
                <Footer />
        </>
    )
}

export default App;