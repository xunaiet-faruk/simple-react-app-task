import image1 from '../../../../public/Image-1.png';


const AboutProduct = () => {
    return (
        <div className='mt-36'>
            <div className="flex">
                <div className='bg-[#FED29C] h-[510px] flex-1 flex flex-col items-center justify-center'>
                 <div className='w-[455px] space-y-4'>
                        <h1 className='text-3xl font-bold text-[#383838]'>Experience clear vision with OptiChroma Vision Frames</h1>
                        <p className='text-[#545454]'>At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.</p>
                        <p className='text-[#545454] pb-5'>Our team of experts is dedicated to helping you find the perfect pair of glasses.</p>
                        <button className='bg-[#383838] text-white  font-semibold text-sm py-2 px-7 rounded-md'>About Us</button>
                 </div>
                </div>
                <div className='flex-1 '>
                    <img className='w-full' src={image1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;
