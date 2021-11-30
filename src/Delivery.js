import ImageGallery from "./ImageGallery";
import Imagetext from "./Imagetext";

const images ={
    firstImage:"/images/unsplash_kWUZKKBR2Ag.png",
    secondImage:"/images/unsplash_tnVdQGmWtb0.png",
    ThirdImage:"/images/unsplash_yiU8G1K85AM.png"
}

const imagetext = {
    header:"Seamless Delivery Service",
    parag:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus et bibendum nibh in platea vel volutpat elit. Elementum suspendisse auctor pulvinar velit enim vel habitant amet.",
    button:"LEARN MORE"
}

const Delivery = () =>{
    return (
        <section className="beautify-section">
            <div className="section-width container">
                <Imagetext {...imagetext}/>
                <ImageGallery {...images}/>
            </div>
        </section>
    )
}


export default Delivery;