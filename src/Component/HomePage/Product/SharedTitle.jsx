

const SharedTitle = ({heading,subheading, button}) => {
    return (
        <div className="space-y-5 bg-white w-[400px] text-center py-6 rounded-sm ">
            <p className="text-[#383838] font-bold text-2xl ">{subheading}</p>
            <p>{heading}</p>
            <button className="bg-[#383838] text-white  font-bold py-1 px-4 rounded-md">{button}</button>
        </div>
    );
};

export default SharedTitle;