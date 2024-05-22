import React, { useState } from 'react';
import bannerimage from '../../../../public/Image-6.png';
import { FaCartShopping } from 'react-icons/fa6';

const Banner = () => {
    const [buttonColors, setButtonColors] = useState([false, true, false]);

    const toggleColor = (index) => {
        setButtonColors(buttonColors.map((color, i) => (i === index ? !color : false)));
    };

    return (
        <div className='bg-[#EAEAEA] lg:h-[87vh] md:h-[200vh] h-[160vh]  w-full max-w-screen-2xl mx-auto'>
            <div className='flex flex-col lg:flex-row md:flex-col items-center justify-around gap-12 h-full '>
                <div className='flex justify-between lg:flex-row md:flex-col flex-col'>
                    <div className='md:mb-12 mb-12 lg:absolute lg:pt-[170px] lg:ml-[180px] lg:space-y-8 space-y-5 md:text-center text-center lg:text-start'>
                        <h1 className='text-[#383838] lg:text-[38px] text-[26px]  md:text-[40px] pt-5 font-bold'>
                            Personalized Eyeglass<br />
                            Shopping
                        </h1>
                        <div className='flex md:ml-48 lg:ml-0 ml-32  gap-2 text-center items-center bg-[#383838] w-[90px] lg:w-[150px] justify-center py-2 rounded-sm'>
                            <FaCartShopping className='lg:text-[14px] text-[12px] text-white' />
                            <button className='text-white lg:text-[14px]  text-[9px] font-semibold'>Buy Now</button>
                        </div>
                    </div>
                    <div className='bg-[#FED29C]  lg:ml-[400px]  rounded-full w-[390px] md:w-[490px] md:h-[490px] h-[390px] lg:w-[490px] lg:h-[490px]'>
                        <img className=' lg:w-[450px] w-[285px]  md:w-[390px] ml-20 lg:mt-[65px] mt:[60px] mt-[130px]' src={bannerimage} alt="Banner" />
                        <img className='lg:bottom-[200px] absolute md:left-[280px] md:-bottom-[310px] lg:left-[650px] w-6 left-[150px] -bottom-[200px]' src="https://i.ibb.co/yp3qVSw/Icon-2.png" alt="" />
                    </div>
                </div>

                <div className='flex flex-col gap-5 mr-2 hidden lg:flex'>
                    {buttonColors.map((isButton, index) => (
                        <button
                            key={index}
                            className={`border-2 w-[12px] h-[12px] rounded-full ${isButton ? 'bg-[#fcd8ac] border-2 border-gray-400' : 'bg-[#7e7c7c]'}`}
                            onClick={() => toggleColor(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
