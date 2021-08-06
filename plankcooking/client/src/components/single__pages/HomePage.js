import { React } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    document.title = "Home | Plankcooking.com";
    return (
        <>
            <main className="home__wrapper m-0 p-0">
                <section className="container-fluid-sm m-0 p-0">
                    <section className="home__rotator__wrapper">
                    <img
                        src="/img/HomePg_Rotator_image1a.png"
                        alt="Home-Rotator"
                        className="home__rotator"
                    />
                    </section>
                    <section className="d-flex justify-content-center">
                        <div className="home__cubes__wrapper">
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
                    </section>
                    <div>
                        <img src="/img/FooterPlank.png" alt="Footer Plank" className="home__footer__plank" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;