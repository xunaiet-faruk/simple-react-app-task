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
        <div className=" mt-36 max-w-screen-xl mx-auto">
            <div className="flex justify-between px-12">
                <div className="space-y-3 ml-10">
                    <h1 className="text-[38px] text-[#383838] font-bold">Our Products</h1>
                    <p className="text-[#545454]">Experience crystal clear vision and elevated style with our <br /> premium collection of eyeglasses.</p>
                </div>

                <div>
                    <div className="flex justify-end gap-5 mx-4 my-8 py-5">
                        <button
                            className={`px-8 py-2 hover:border-2 ${activeButton === 1 ? 'border font-semibold border-[#545454] text-black rounded-md' : 'font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
                            onClick={() => handleButtonClick(1, 1)}
                        >
                            Latest
                        </button>

                        <button
                            className={`px-8 py-2 hover:border-2 ${activeButton === 2 ? 'border font-semibold border-[#545454] text-black rounded-md' : 'font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
                            onClick={() => handleButtonClick(2, 2)}
                        >
                            Special
                        </button>

                        <button
                            className={`px-8 py-2 hover:border-2 ${activeButton === 3 ? 'border font-semibold border-[#545454] text-black rounded-md' : 'font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
                            onClick={() => handleButtonClick(3, 3)}
                        >
                            Best sell
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-12">
                {/* Card 1 */}
                <div className={`group relative mx-auto ${activeCard !== 1 ? 'hidden' : ''}`}>
                <Latest/>
                </div>

                {/* Card 2 */}
                <div className={`group relative mx-auto ${activeCard !== 2 ? 'hidden' : ''}`}>
                    <Speacial/>
                </div>

                {/* Card 3 */}
                <div className={`group relative mx-auto ${activeCard !== 3 ? 'hidden' : ''}`}>
                    <Best/>
                </div>
            </div>
        </div>
    );
};

export default Products;
