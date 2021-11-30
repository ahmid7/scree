

const Imagetext = (props) =>{
    return(
        <div className="image-text"> 
            <h2>{props.header}</h2>
            <p>{props.parag}</p>
            <button><a href="#link">{props.button} <span>&#8594;</span> </a></button> 
        </div>
    )
}

export default Imagetext;