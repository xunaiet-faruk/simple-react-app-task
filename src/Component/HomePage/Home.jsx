

import Banner from "./Banner/Banner";
import Menu from "./Banner/Menu";
import Navbar from "./Navabar/Navbar";
import Products from "./Product/Products";


const Home = () => {
    return (
        <div>
           <Navbar/>
            <Banner/>
            <Menu/>
            <Products/>
        </div>
    );
};

export default Home;