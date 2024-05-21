import { useEffect, useState } from "react";


const Speacial = () => {

    const [speacial, setSpeacial] = useState([]);

    useEffect(() => {
        fetch('./Product.json')
            .then(res => res.json())
            .then(data => setSpeacial(data.slice(0, 3)))
    }, []);

    
    const showButtonIndices = [0, 1, 3, 5];
    const [buttonColors, setButtonColors] = useState([false, false, false]);
    const toggleColor = (index) => {
        setButtonColors(buttonColors.map((color, i) => (i === index ? !color : false)));
    };

    return (
        <div className="grid grid-cols-3 gap-7">
            {
                speacial.map((item, index) => (
                    <div key={index} className="mx-auto max-w-[350px] space-y-6 font-sans">
                        <div className="relative bg-[#F7F7F7] flex flex-col h-[450px] w-[350px] justify-between lg:h-[480px] px-12">
                            <div className="flex items-center justify-between pt-4">
                                {/* love */}
                                {showButtonIndices.includes(index) && (
                                    <button className="rounded-full bg-[#FED29C] w-14 h-14 font-bold duration-200 hover:bg-[#fec57f]">
                                        {item?.discountPercentage}
                                    </button>
                                )}
                                <div className="flex items-center border-2 border-black rounded-full p-2">
                                    <svg width={30} className="fill-transparent stroke-black stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
                                        <g strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <img className="h-full w-full object-contain" src={item?.image} alt="card" />
                            <div className='flex gap-5 mb-4 justify-center'>
                                {buttonColors.map((isButton, buttonIndex) => (
                                    <button
                                        key={buttonIndex}
                                        className={`border-2 w-[12px] h-[12px] rounded-full ${isButton ? 'bg-[#fcd8ac] border-2 border-gray-400' : 'bg-[#7e7c7c]'}`}
                                        onClick={() => toggleColor(buttonIndex)}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className="mx-auto w-[85%] space-y-4 -ml-0 font-semibold">
                            <h6 className="text-sm md:text-base lg:text-lg">Waterproof Sport HD Monitor </h6>
                            <div className="flex gap-2">
                                <p className="text-xs font-bold md:text-[16px]">$121r</p>
                                <p className="text-xs font-semibold text-[#bbb9b9] md:text-[16px] line-through ">$121r</p>
                            </div>
                            <div>
                                <button className={`text-[#5A5A5A] hover:text-[#FED29C] ${index === 0 || index === 3 || index === 4 ? 'underline' : ''}`}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Speacial;