

import AboutProduct from "./AboutProduct/AboutProduct";
import Banner from "./Banner/Banner";
import Menu from "./Banner/Menu";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Navbar from "./Navabar/Navbar";
import Products from "./OurProducts/Products";



const Home = () => {
    return (
        <div className="">
           <Navbar/>
            <Banner/>
            <Menu/>
           <Features/>
           <AboutProduct/>
           <Products/>
           <Footer/>
        </div>
    );
};

export default Home;