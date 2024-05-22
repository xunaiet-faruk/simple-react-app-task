

const SharedTitle = ({heading,subheading, button}) => {
    return (
        <div className="md:space-y-5 space-y-3 bg-white w-[280px] md:w-[400px] shadow-xl text-center py-3 mb-12 md:mb-0 md:py-6 rounded-sm ">
            <p className="text-[#383838] font-bold md:text-xl lg:text-2xl ">{subheading}</p>
            <p>{heading}</p>
            <button className="bg-[#383838] text-white  font-bold py-1 px-4 rounded-md">{button}</button>
        </div>
    );
};

export default SharedTitle;