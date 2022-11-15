

const Banner = (props) => {
    const {img, title,altTxt} = props
    return (
        <>
            <div className="banner">
                <img src={img} alt={altTxt} className="img_banner"/>
                <p className="titre">{title}</p>
            </div>
        </>
    )
}

export default Banner