import styles from "../styles/Home.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel(props) {
  const gallery = props.images;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {gallery.map((item) => (
          <img
            src={item.image}
            className={styles.my_slide2}
            alt="..."
            key={item.image}
          />
        ))}
      </Slider>
    </>
  );
}
