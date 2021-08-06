import { React } from "react";

const Recipes = () => {
    document.title = "Recipes | Plankcooking.com"
    return (
        <>
            <main className="recipes__wrapper" id="toggle__wrapper">

<section className="recipes__menu">
    <div className="recipes__menu__links">
        <img src="/img/Recipe_MenuHeader.png" alt="Recieps Menu Header" />
    </div>
</section>

<section className="dropdown">
<div className="dropdown__wrapper ">
    <button
    className="btn recipes__dropdown__button text-light px-5 my-4"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    >
    Recipes
    </button>
</div>
</section>

<section className="recipes__content__wrapper mt-5">


    <div className="recipes__content pt-3 px-4">
        <div className="recipes__item">
            <h5 className="recipes__title">
                Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Alder_Plank_Roasted_Porcini_Crusted_Salmon_with_Pesto_Rice.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="Download Recipe" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Ancho Chili Rubbed Chicken with Corn Relish
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Ancho Chili Rubbed Chicken with Corn Relish recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Ancho_Chili_Rubbed_Chicken_with_Corn_Relish.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Cedar BBQ Plank Roasted Spicy Pecan Halibut
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Cedar BBQ Plank Roasted Spicy Pecan Halibut recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Cedar_BBQ_Plank_Roasted_Spicy_Pecan_Halibut.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Cedar Plank Roasted Mushrooms
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Cedar Plank Roasted Mushrooms recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Cedar_Plank_Roasted_Mushrooms.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Garlic Chicken Dijon
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Garlic Chicken Dijon recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Garlic_Chicken_Dijon.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Maple Roasted Pork Chops and Pearl Onions
            </h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column mr-2">
                    <p className="recipes__description">
                        Click the Recipe PDF button to download the Maple Roasted Pork Chops and Pearl Onions recipe.
                    </p>
                    <a className="mb-2" href="/recipePDFs/Maple_Roasted_Pork_Chops_and_Pearl_Onions.pdf">
                        <img src="/img/RecipeDownload_Button.png" alt="" />
                    </a>
                </div>
                <img src="img/MaplePorkChops_RecipeImage.png" alt="Maple Pork Chops"/>
            </div>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Maple Turkey w/Apple-Pecan Stuffing
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Maple Turkey w/Apple-Pecan Stuffing recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Maple_Turkey_with_Apple_Pecan_Stuffing.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Baby Back Ribs
            </h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column mr-2">
                    <p className="recipes__description">
                        Click the Recipe PDF button to download the Plank Roasted Baby Back Ribs recipe.
                    </p>
                    <a className="mb-2" href="/recipePDFs/Plank_Roasted_Baby_Back_Ribs.pdf">
                        <img src="/img/RecipeDownload_Button.png" alt="" />
                    </a>
                </div>
                <img src="img/BBQRibs_RecipeImage.png" alt="Baby Back Ribs"/>
            </div>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Dungeness Crab Stuffed Mushrooms
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Plank Roasted Dungeness Crab Stuffed Mushrooms recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Plank_Roasted_Dungeness_Crab_Stuffed_Mushrooms.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Garlic-Rosemary Pork Chops
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Plank Roasted Garlic-Rosemary Pork Chops recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Plank_Roasted_Garlic_Rosemary_Pork_Chops.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Honey Mustard Chicken
            </h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column mr-2">
                    <p className="recipes__description">
                        Click the Recipe PDF button to download the Plank Roasted Honey Mustard Chicken recipe.
                    </p>
                    <a className="mb-2" href="/recipePDFs/Plank_Roasted_Honey_Mustard_Chicken.pdf">
                        <img src="/img/RecipeDownload_Button.png" alt="" />
                    </a>
                </div>
                <img src="img/MustardChicken_RecipeImage.png" alt="Honey Mustard Chicken"/>
            </div>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Pesto Stuffed Chicken Breast
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Plank Roasted Pesto Stuffed Chicken Breast recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Plank_Roasted_Pesto_Stuffed_Chicken_Breast.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Pumpkin Soup
            </h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column mr-2">
                    <p className="recipes__description">
                        Click the Recipe PDF button to download the Plank Roasted Pumpkin Soup recipe.
                    </p>
                    <a className="mb-2" href="/recipePDFs/Plank_Roasted_Pumpkin_Soup.pdf">
                        <img src="/img/RecipeDownload_Button.png" alt="" />
                    </a>
                </div>
                <img src="img/PumpkinSoup_RecipeImage.png" alt="Pumpkin Soup"/>
            </div>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Plank Roasted Sausage Stuffed Zucchini
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Plank Roasted Sausage Stuffed Zucchini recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Plank_Roasted_Sausage_Stuffed_Zucchini.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Porcini Chicken with Lemon-Thyme Zucchini
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Porcini Chicken with Lemon-Thyme Zucchini recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Porcini_Chicken_with_Lemon_Thyme_Zucchini.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Pork Tenderloin with Herb Stuffing and Onions
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Pork Tenderloin with Herb Stuffing and Onions recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Pork_Tenderloin_with_Herb_Stuffing_and_Onions.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Salmon Oregano with Lemon Caper Dressing
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Salmon Oregano with Lemon Caper Dressing recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Salmon_Oregano_with_Lemon_Caper_Dressing.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Salmon with Basil-Garlic Rub
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Salmon with Basil-Garlic Rub recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Salmon_with_Basil_Garlic_Rub.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Sea Bass with Ginger
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Sea Bass with Ginger recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Sea_Bass_with_Ginger.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                Teriyaki Chicken Wings - Appetizer
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the Teriyaki Chicken Wings - Appetizer recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/Teriyaki_Chicken_Wings_Appetizer.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                The Original Cedar Plank Roasted Salmon
            </h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column mr-2">
                    <p className="recipes__description">
                        Click the Recipe PDF button to download the The Original Cedar Plank Roasted Salmon recipe.
                    </p>
                    <a className="mb-2" href="/recipePDFs/The_Original_Cedar_Plank_Roasted_Salmon.pdf">
                        <img src="/img/RecipeDownload_Button.png" alt="" />
                    </a>
                </div>
                <img src="img/CedarPlankSalmon_RecipeImage.png" alt="Cedar Plank Roasted Salmon"/>
            </div>
        </div>
        <div className="recipes__item">
            <h5 className="recipes__title">
                White King Salmon with Roasted Fennel
            </h5>
            <p className="recipes__description">
                Click the Recipe PDF button to download the White King Salmon with Roasted Fennel recipe.
            </p>
            <a className="mb-2" href="/recipePDFs/White_King_Salmon_with_Roasted_Fennel.pdf">
                <img src="/img/RecipeDownload_Button.png" alt="" />
            </a>
        </div>


    </div>
</section>

</main>
        </>
    )
}

export default Recipes;