import image1 from '../../../../public/Image-1.png';


const AboutProduct = () => {
    return (
        <div className='lg:mt-32 md:mt-28 mt-16 '>
            <div className="flex ">
                <div className='bg-[#FED29C] md:h-[227px] lg:h-[460px] h-[170px] flex-1 flex flex-col items-center justify-center'>
                    <div className='w-[200px] md:w-[455px] space-y-2 md:space-y-2 lg:space-y-4 px-2 md:px-5 lg:px-6'>
                        <h1 className='text-[10px] md:text-2xl lg:text-3xl font-bold  text-[#383838]'>
                            Experience clear vision with OptiChroma Vision Frames
                        </h1>
                        <p className='text-[#545454] text-[7px] md:text-[12px] lg:text-lg'>
                            At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.
                        </p>
                        <p className='text-[#545454] text-[7px] md:text-[12px] lg:text-lg lg:pb-5'>
                            Our team of experts is dedicated to helping you find the perfect pair of glasses.
                        </p>
                        <button className='bg-[#383838] text-white font-semibold text-xs md:text-[9px] text-[7px] lg:text-sm py- md:py-1 lg:py-2 px-1  md:px-2 lg:px-7  rounded-md'>
                            About Us
                        </button>
                    </div>

                </div>
                <div className='flex-1 '>
                    <img className='w-full lg:h-[460px]  md:h-full h-full object-cover' src={image1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;
