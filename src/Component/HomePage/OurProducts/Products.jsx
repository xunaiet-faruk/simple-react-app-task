import { useState } from "react";
import Latest from "./Latest";
import Speacial from "./Speacial";
import Best from "./Best";

const Products = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [activeCard, setActiveCard] = useState(1);

    const handleButtonClick = (buttonIndex, cardNumber) => {
        setActiveButton(buttonIndex);
        setActiveCard(cardNumber);
    };

    return (
        <div className=" mt-28 max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-col md:flex-row justify-between  lg:px-12 ">
                <div className="space-y-3 lg:ml-10 md:text-start text-center">
                    <h1 className="text-[38px] text-[#383838] font-bold">Our Products</h1>
                    <p className="text-[#545454]">Experience crystal clear vision and elevated style with our <br /> premium collection of eyeglasses.</p>
                </div>

                <div className="lg:-mt-24 md:mt-5 ml-16 md:ml-0">
                    <div className="flex lg:justify-end gap-5 mx-4 my-8 py-5 ">
                        <button
                            className={`lg:px-8 md:px-4 md:py-0  px-4 py-1 lg:py-2 hover:border-2 ${activeButton === 1 ? 'border font-semibold border-[#545454] text-black rounded-md' : 'font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
                            onClick={() => handleButtonClick(1, 1)}
                        >
                            Latest
                        </button>

                        <button
                            className={`lg:px-8 md:px-4 md:py-0  px-4 py-1 lg:py-2  hover:border-2 ${activeButton === 2 ? 'border font-semibold border-[#545454] text-black rounded-md' : 'font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
                            onClick={() => handleButtonClick(2, 2)}
                        >
                            Special
                        </button>

                        <button
                            className={`lg:px-8 md:px-4 md:py-0  px-4 py-1 lg:py-2  hover:border-2 ${activeButton === 3 ? 'border font-semibold border-[#545454] text-black rounded-md' : 'font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
                            onClick={() => handleButtonClick(3, 3)}
                        >
                            Best sell
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-12">
                {/* Latest card data  */}
                <div className={`group relative mx-auto ${activeCard !== 1 ? 'hidden' : ''}`}>
                <Latest/>
                </div>

                {/*Speacial card data  */}
                <div className={`group relative mx-auto ${activeCard !== 2 ? 'hidden' : ''}`}>
                    <Speacial/>
                </div>

                {/* Best card data  */}
                <div className={`group relative mx-auto ${activeCard !== 3 ? 'hidden' : ''}`}>
                    <Best/>
                </div>
            </div>
        </div>
    );
};

export default Products;
