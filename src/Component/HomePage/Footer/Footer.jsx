import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
    return (
        <div>
            <div className="mt-16 max-w-screen-xl mx-auto ">

                <footer className="flex flex-col text-black">
                    <div className="flex flex-col lg:items-start items-center justify-around gap-5 py-10 md:flex-row md:gap-0 md:items-center">
                        <div>
                            <aside className="lg:w-[350px] md:w-[200px] space-y-8 flex flex-col justify-center items-center md:items-start">

                                <img className="md:w-[100px] lg:w-[150px]" src="https://i.ibb.co/DLrFtdX/EyeGlass.png" alt="" />
                                <p className="text-sm md:text-start text-center">Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at <br /> Hampde</p>
                                <div className="flex gap-4">
                                    <div className="border-2 border-[#FED29C] hover:bg-[#FED29C] rounded-full p-2 flex items-center justify-center">
                                        <FaLinkedinIn className="text-xl" />
                                    </div>
                                    <div className="border-2 border-[#FED29C] hover:bg-[#FED29C] rounded-full p-2 flex items-center justify-center">
                                        <FaInstagramSquare className="text-xl" />
                                    </div>
                                    <div className="border-2 border-[#FED29C] hover:bg-[#FED29C] rounded-full p-2 flex items-center justify-center">
                                        <IoLogoTwitter className="text-xl" />
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="">
                            <nav className="text-sm space-y-6 ">
                                <div className=" ">
                                    <h1 className="text-xl text-[#383838] pt-5 font-bold ">Support</h1>

                                </div>
                                <div className="pt-3">
                                    <ul className="space-y-3">
                                        <li>
                                            <a className="cursor-pointer hover:underline">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Product FAQs</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Company Support</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Manage Account</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="pt-3">
                            <nav className="text-sm space-y-6">
                                <div className=" ">
                                    <h1 className="text-xl text-[#383838] pt-3 font-bold ">Quick Links</h1>

                                </div>
                                <div className="pt-3">
                                    <ul className="space-y-3">
                                        <li>
                                            <a className="cursor-pointer hover:underline">About Us</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Blog Post</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Product Features</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Company Info</a>
                                        </li>
                                        <li>
                                            <a className="cursor-pointer hover:underline">Company Info</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <nav className="text-sm space-y-6">
                            <div className=" ">
                                <h1 className="text-xl text-[#383838] pt-5 font-bold ">Communnity</h1>

                            </div>
                            <div className="pt-3">
                                <ul className="space-y-3">
                                    <li>
                                        <a className="cursor-pointer hover:underline">Become an affiliate</a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer hover:underline">Help Center</a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer hover:underline">Product FAQs</a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer hover:underline">Our Fourms</a>
                                    </li>
                                    <li>
                                        <a className="cursor-pointer hover:underline">Product API</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                 
                </footer>

            </div>
            <aside className="w-full border-t border-[#FED29C]  py-5 md:px-7 lg:px-36 px-3  text-sm">
                <div>
                    <div className="flex  justify-between">
                        <div>
                            <p className="text-[11px]">Copyright © 2023 All rights reserved by Eyeglass</p>

                        </div>
                        <div className="flex md:gap-5 gap-2 text-[11px]">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of service</a>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Footer;