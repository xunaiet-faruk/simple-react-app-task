import SharedTitle from "./SharedTitle";
import image1 from '../../../../public/Image-2.png'
import image2 from '../../../../public/Image-3.png'
import image3 from '../../../../public/Image-4.png'
import image4 from '../../../../public/Image-5.png'
const Products = () => {
    return (
       <div className="max-w-screen-xl mx-auto">
            <div className="-mt-[450px]  gap-6 mb-6 flex items-center justify-center">


                {/* ````````````    first card info ```````````` */}

                <div className="relative">
                    <img className="w-[500px]" src={image4} alt="Sunglasses" />
                    <div className="absolute mt-[250px] inset-0 flex items-center justify-center">
                        <SharedTitle heading={"Up to 80% off on selected item"} subheading={"Bravo Sunglasses"} button={"Buy Now"} />
                    </div>
                </div>
                {/* ````````````    2nd card info ```````````` */}
                <div className="relative -mt-[95px]">
                    <img className="w-[500px] " src={image3} alt="Sunglasses" />
                    <div className="absolute mt-[160px] inset-0 flex items-center justify-center">
                        <SharedTitle heading={"Up to 30% off on selected item"} subheading={"Tommy Hilfiger"} button={"Buy Now"} />
                    </div>
                </div>




            </div>



            <div className="  gap-6 mb-12 flex items-center justify-center">


                {/* ````````````    3rd card info ```````````` */}

                <div className="relative">
                    <img className="w-[500px] " src={image2} alt="Sunglasses" />
                    <div className="absolute mt-[160px] inset-0 flex items-center justify-center">
                        <SharedTitle heading={"Up to 40% off on selected item"} subheading={"John Jacobs"} button={"Buy Now"} />
                    </div>
                </div>
                {/* ````````````    4th card info ```````````` */}
                <div className="relative -mt-24 ">
                    <img className="w-[500px] " src={image1} alt="Sunglasses" />
                    <div className="absolute mt-[250px] inset-0 flex items-center justify-center">
                        <SharedTitle heading={"Up to 10% off on selected item"} subheading={"Vincent Chase"} button={"Buy Now"} />
                    </div>
                </div>




            </div>
       </div>
    );
};

export default Products;
