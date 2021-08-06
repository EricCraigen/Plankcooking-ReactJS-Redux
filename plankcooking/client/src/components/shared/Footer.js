import { React } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="container-fluid">
                <section className="footer__wrapper container mt-5 mb-5">
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Shop/Products"> | SHOP</Link>
                    <Link to="/Reviews"> | REVIEWS</Link>
                    <Link to="/Recipes"> | RECIPES</Link>
                    <Link to="/Contact"> | CONTACT</Link>
                    <Link to="/Policies"> | POLICIES</Link>
                    <p>&copy;Copyright 2021 Plankcooking.com. All Rights Reserved</p>
                </section>
            </footer>
        </>
    )
}

export default Footer;