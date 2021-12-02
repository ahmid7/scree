import { useState } from "react";
import { RiSearch2Line,RiShoppingCartLine } from "react-icons/ri";
import Hamburger from "hamburger-react";

const Hero = () => {
    const [isOpen, setOpen] = useState(false);
    const [colorChange,setcolorChange] = useState(false);
    const changeNavBarColor = () =>{
        if(window.scrollY >=10){
            setcolorChange(true);
        }else{
            setcolorChange(false)
        }
    }
    window.addEventListener('scroll', changeNavBarColor);
    return(
        <div className="hero-bg" id="home">
            <div className={colorChange ? 'hero-header nav-color' : 'hero-header'}>
                <div className="hero-icon">
                    <img src="images/logo.png" alt="logo"/>
                    <h2 className="logo-text">Furnie</h2>
                </div>
                <ul className= {`${isOpen ? 'block' : 'hidden'}`}>
                    <li><a href="#home">home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className="search-cart">
                    <div className="search">
                        <RiSearch2Line className="search-icon"/>
                    </div>
                    <div className="cart">
                        <RiShoppingCartLine className="cart-icon"/>
                        <p>0</p>
                    </div>
                    <div class="hamburger-container" >
                        <Hamburger toggled={isOpen} toggle={setOpen} distance ="sm" size={18} hideOutline={false}/>
                    </div>
                </div>
            </div>
            <section className="hero-content">
                <div class="section-width">
                    <h2>Beautiful Furnitures That Complement <br className="hide-mobile"/> Your Home And Workspace</h2>
                    <button><a href="#home">shop now</a></button>
                </div>
            </section>
        </div>
        
    );
}

export default Hero;