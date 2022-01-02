import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Carousel(props) {

    const gallery = props.images
    var settings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500
    };

    return (  <>

        <Slider {...settings}>
            {gallery.map(item => (
                <img src={item.image} className={styles.my_slide} alt="..." key={item.image}/>    
            ))}
        </Slider>          
    </>
    )
}
