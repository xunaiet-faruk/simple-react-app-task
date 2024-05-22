import { IoIosSearch } from "react-icons/io";
import { BsCreditCardFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";


const Menu = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="absolute lg:-bottom-[100px] md:-bottom-[560px] -bottom-[380px] max-w-screen-xl mx-auto">
                <div className="flex sm:flex-row lg:flex-row md:flex-row justify-between items-center md:gap-12 lg:gap-0 gap-3">
                   
                    <div className="flex flex-col items-center gap-4 ">
                        <div className='bg-[#FED29C] lg:w-20 lg:h-20 w-8 h-8 lg:ml-5 md:w-14 md:h-14 rounded-full flex justify-center items-center'>
                            <FaSearch className="lg:text-2xl  text-sm" />
                        </div>
                        <div className="text-center ">
                            <h1 className="lg:text-xl md:text-sm text-[10px] text-[#383838] font-semibold pb-1">Search your sunglass</h1>
                            <p className="text-[#545454] text-[8px] md:text-sm">Shop Stylish Eyewear Now</p>
                        </div>
                    </div>
                  
                    <div className="hidden lg:flex items-center justify-center -mt-20 ">
                        <span className="mt-1 text-[#545454]">--------------------</span>
                        <div className="w-3 h-3 rounded-full bg-[#FED29C] mt-2"></div>
                    </div>


                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-8 h-8 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full flex justify-center items-center'>
                            <img className='lg:w-7 md:w-5 w-5' src="https://i.ibb.co/yp3qVSw/Icon-2.png" alt="" />

                        </div>
                        <div className="text-center">
                            <h1 className="lg:text-xl md:text-sm text-[10px] text-[#383838] font-semibold pb-1">Select Sunglass </h1>
                            <p className="text-[#545454] text-[8px] md:text-sm">Shade Your Style</p>
                        </div>
                    </div>
                    

                    <div className="hidden lg:flex items-center justify-center -mt-20">
                        <span className="mt-1 text-[#545454]">--------------------</span>
                        <div className="w-3 h-3 rounded-full bg-[#FED29C] mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-8 h-8 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full flex justify-center items-center'>
                            <BsCreditCardFill className="lg:text-2xl md:text-md font-bold" />
                        </div>
                        <div className="text-center">
                            <h1 className="lg:text-xl md:text-sm text-[10px] text-[#383838] font-semibold pb-1">Make Payment</h1>
                            <p className="text-[#545454] text-[8px] md:text-sm">Securely Checkout Now</p>
                        </div>
                    </div>


                    <div className="hidden lg:flex items-center justify-center -mt-20">
                        <span className="mt-1 text-[#545454]">--------------------</span>
                        <div className="w-3 h-3 rounded-full bg-[#FED29C] mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-8 h-8 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full flex justify-center items-center'>
                            <img className="lg:w-7 md:w-4 w-4" src="https://i.ibb.co/gMLjBjB/Icon-1.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="lg:text-xl md:text-sm text-[10px] text-[#383838] font-semibold pb-1">Received Product </h1>
                            <p className="text-[#545454] text-[8px] md:text-sm">See the World Clearly</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Menu;
