
const ImageGallery = (props) =>{
    const {firstImage,secondImage,ThirdImage} =props;
    return(
        <div className="images-container">
            <div className="first-image">
                <img src={firstImage} alt=""/>
            </div>
            <div className="second-image">
                <img src={secondImage} alt=""/>
            </div>
            <div className ="third-image">
                <img src={ThirdImage} alt=""/>
            </div>
        </div>
    )
}

export default ImageGallery