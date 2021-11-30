import ImageGallery from "./ImageGallery";
import Imagetext from "./Imagetext";

const images ={
    firstImage:"/images/unsplash_W5dsm9n6e3g.png",
    secondImage:"/images/unsplash_XmhAN9TYD50.png",
    ThirdImage:"/images/unsplash_f8egRYt5RGk.png"
}

const imagetext = {
    header:"Beautify your space",
    parag:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus et bibendum nibh in platea vel volutpat elit. Elementum suspendisse auctor pulvinar velit enim vel habitant amet.",
    button:"LEARN MORE"
}

const Beautify = () =>{
    return(
        <section className="beautify-section">
            <div className="section-width container">
                <ImageGallery {...images}/>
                <Imagetext {...imagetext}/>
            </div>
        </section>
    )
}


export default Beautify