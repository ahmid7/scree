import { useState } from "react";
import { RiSearch2Line,RiShoppingCartLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";

const Hero = () => {
    const [navShown,setNavshown] = useState(false);
    const handleNavClick = () =>{
        setNavshown(!setNavshown)
    }
    return(
        <div className="hero-bg">
            <div className="hero-header">
                <div className="hero-icon">
                    <img src="images/logo.png" alt="logo"/>
                    <h2 className="logo-text">Furnie</h2>
                </div>
                <ul className= {`${navShown ? 'block' : 'hidden'}`}>
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
                    <button class="hamburger" >
                        <CgMenuRightAlt onClick= {handleNavClick}/>
                    </button>
                </div>
            </div>
            <section className="hero-content">
                <div class="section-width">
                    <h2>Beautiful Furnitures That Complement <br/> Your Home And Workspace</h2>
                    <button><a href="#home">shop now</a></button>
                </div>
            </section>
        </div>
        
    );
}

export default Hero;