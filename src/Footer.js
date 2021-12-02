import { RiInstagramLine,RiFacebookLine,RiTwitterLine,RiYoutubeLine } from "react-icons/ri";


const Footer =() =>{
    return (
        <footer id="contact">
            <div className="section-width last-page">
                <div className="copy-right">
                    © 2021 Furnie. All rights reserved
                </div>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo"/>
                    <h2>Furnie</h2>
                </div>
                <div className="media-icons-container">
                    <div className="media-icon">
                        <RiInstagramLine className="m-icon"/>
                    </div>
                    <div className="media-icon">
                        <RiFacebookLine className="m-icon"/>
                    </div>
                    <div className="media-icon">
                        <RiTwitterLine className="m-icon"/>
                    </div>
                    <div className="media-icon">
                        <RiYoutubeLine className="m-icon"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;