import { React } from "react";

const Contact = () => {
    document.title = "Contact Us | Plankcooking.com"
    return (
        <>
            <main className="contact__wrapper" id="toggle__wrapper">

            <section className="contact__menu">
                <div className="contact__menu__links">
                    <img src="/img/Contact_MenuHeader.png" alt="About Menu Header" />
                </div>
            </section>

            <section className="dropdown">
            <div className="dropdown__wrapper">
                <button
                className="btn contact__dropdown__button dropdown-toggle text-light px-5 my-4"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >
                Contact Us
                </button>
            </div>
            </section>

            <section className="contact__content__wrapper mt-5">


                <div className="contact__content pt-3 px-4">
                    <div className="d-flex">
                        <h5 className="d-flex col-5 m-0 p-0 py-1 mb-4 contact__title">
                            CONTACT US
                        </h5>
                        <div className="d-flex col-7 contact__title__filler"></div>
                    </div>



                    <div className="contact__item">
                        <p className="contact__description">
                        You can contact us one of two ways; click one of the email links below to send us an email, 
                        or call the customer service number.
                        </p>
                        <div className="d-flex flex-column ml-2">
                            <p className="m-0 p-0">CUSTOMER SERVICE:</p>
                            <a className="m-0 p-0" href="mailto:chefhowie@plankcooking.com">ChefHowie@plankcooking.com</a>
                            <p className="m-0 p-0">Phone: 425.881.0422</p>
                            <p className="m-0 p-0">Fax: 425.881.7338</p>
                        </div>
                    </div>
                    <div className="contact__footer mt-3">
                        <p>WHOLESALE OPPORTUNITIES are available, please contact customer service for more information.</p>
                    </div>
                </div>
            </section>

            </main>
        </>
    )
}

export default Contact;