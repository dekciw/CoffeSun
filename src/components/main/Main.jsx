import './main.scss'
import Info from "./info/Info.jsx";
import Advantages from "./advantages/Advantages.jsx";
import Products from "./products/Products.jsx";
import Order from "./order/Order.jsx";
import Footer from "../footer/Footer.jsx";

function Main() {
    return (
        <>
            <Info/>
            <Advantages/>
            <Products/>
            <Order/>
        </>
    )
}

export default Main