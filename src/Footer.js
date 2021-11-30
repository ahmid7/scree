import { RiInstagramLine,RiFacebookLine,RiTwitterLine,RiYoutubeLine } from "react-icons/ri";


const Footer =() =>{
    return (
        <footer>
            <div className="section-width last-page">
                <div>
                    © 2021 Furnie. All rights reserved
                </div>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo"/>
                    <h2>Furnier</h2>
                </div>
                <div className="media-icons-container">
                    <div className="media-icon">
                        <RiInstagramLine/>
                    </div>
                    <div className="media-icon">
                        <RiFacebookLine/>
                    </div>
                    <div className="media-icon">
                        <RiTwitterLine/>
                    </div>
                    <div className="media-icon">
                        <RiYoutubeLine/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;