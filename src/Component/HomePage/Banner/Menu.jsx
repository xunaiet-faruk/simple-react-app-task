import { IoIosSearch } from "react-icons/io";
import { BsCreditCardFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";


const Menu = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="absolute lg:-bottom-[100px] md:-bottom-[850px] max-w-screen-xl mx-auto">
                <div className="flex sm:flex-row lg:flex-row md:flex-row justify-between items-center md:gap-12 lg:gap-0">
                  
                  
                  
                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-20 h-20 rounded-full flex justify-center items-center'>
                            <FaSearch className="text-2xl" />
                        </div>
                        <div className="text-center">
                            <h1 className="lg:text-xl text-[#383838] font-semibold">Search your sunglass</h1>
                            <p className="text-[#545454] text-sm">Shop Stylish Eyewear Now</p>
                        </div>
                    </div>
                  
                        <div className="flex items-center justify-center   -mt-20">
                        <span className="mt-1 text-[#545454]">--------------------</span>
                        <div className="w-3 h-3 rounded-full bg-[#FED29C]  mt-2"></div>
                        </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-20 h-20 rounded-full flex justify-center items-center'>
                           
                        </div>
                        <div className="text-center">
                            <h1 className="text-xl text-[#383838] font-semibold">Select Sunglass </h1>
                            <p className="text-[#545454] text-sm">Shade Your Style</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center  -mt-20">
                        <span className="mt-1 text-[#545454]">--------------------</span>
                        <div className="w-3 h-3 rounded-full bg-[#FED29C]  mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-20 h-20 rounded-full flex justify-center items-center'>
                            <BsCreditCardFill className="text-2xl font-bold" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-xl text-[#383838] font-semibold">Make Payment</h1>
                            <p className="text-[#545454] text-sm">Securely Checkout Now</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center   -mt-20">
                        <span className="mt-1 text-[#545454]">--------------------</span>
                        <div className="w-3 h-3 rounded-full bg-[#FED29C]  mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className='bg-[#FED29C] w-20 h-20 rounded-full flex justify-center items-center'>
                            <img className="w-7" src="https://i.ibb.co/gMLjBjB/Icon-1.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-xl text-[#383838] font-semibold">Received Product </h1>
                            <p className="text-[#545454] text-sm">See the World Clearly</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Menu;
