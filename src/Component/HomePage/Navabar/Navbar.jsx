import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ cartItems }) => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className="bg-[#FFFFFF]">
            <div className="max-w-screen-xl mx-auto px-4">
                <nav className="flex justify-between items-center py-3 text-black">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
                        <img className="w-[150px]" src="https://i.ibb.co/47SXRXQ/EyeGlass.png" alt="Logo" />
                    </div>

                    <ul className="hidden lg:flex items-center justify-between gap-10">
                        <li className="group flex cursor-pointer flex-col">
                            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FED29C] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            About Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FED29C] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Products<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FED29C] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Features<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FED29C] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Reviews<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FED29C] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Contact Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#FED29C] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>

                    <div className="flex gap-4">
                        <div className="cursor-pointer lg:hidden">
                            <MdShoppingCart className="text-xl" />
                        </div>
                        <div className="cursor-pointer lg:hidden">
                            <FaUser />
                        </div>
                        <ul className="hidden lg:flex gap-4 list-none rounded-full px-6 py-2">
                            <div>
                                <MdShoppingCart />
                                <span className="text-xl text-red-500">{cartItems?.reduce((acc, curr) => acc + curr, 0)}</span>
                            </div>
                            <li className="cursor-pointer">
                                <FaUser />
                            </li>
                        </ul>
                    </div>

                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        {dropDownState && (
                            <ul className="z-10 bg-[#FED29C] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                                <li className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-sky-600">Home</li>
                                <li className="cursor-pointer px-6 py-2 text-white hover:bg-[#FED29C]">About Us</li>
                                <li className="cursor-pointer px-6 py-2 text-white hover:bg-[#FED29C]">Products</li>
                                <li className="cursor-pointer px-6 py-2 text-white hover:bg-[#FED29C]">Features</li>
                                <li className="cursor-pointer px-6 py-2 text-white hover:bg-[#FED29C]">Reviews</li>
                                <li className="cursor-pointer px-6 py-2 text-white hover:bg-[#FED29C]">Contact Us</li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
