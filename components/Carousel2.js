import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";

export default function Carousel2({ name, id, images, image, onClick }) {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);

  function handleShow(item, index) {
    setShow(true);
    setSelectedImage(item.image);
  }
  const gallery = images;
  var settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <>
      <Slider {...settings}>
        {gallery.map((item) => (
          <img
            onClick={() => {
              handleShow(item);
            }}
            src={item.image}
            className={styles.my_slide}
            alt="..."
            key={item.image}
          />
        ))}
      </Slider>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <img src={selectedImage} className="w-100" alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
}
