import {useState} from "react";

const Caroussel = (props) => {
    const [position, setPosition] = useState(0)
    const {images} = props
    const altTxt = "";
    const img = images[position]

    const handleNext = () => {
        if (position >= (images.length - 1)) {
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }

    const handlePrevious = () => {
        if (position > 0) {
            setPosition(position - 1)
        } else {
            setPosition(images.length - 1)
        }
    }

    return (
            <div className="banner">
                <img src={img} alt={altTxt} className="img_banner"/>
                <i className="fa-solid fa-chevron-left" onClick={() => handlePrevious()}></i>
                <i className="fa-solid fa-chevron-right" onClick={() => handleNext()}></i>
                <span className="taille">{position + 1}/{images.length}</span>
            </div>
    )
}

export default Caroussel