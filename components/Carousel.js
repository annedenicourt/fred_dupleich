import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Carousel({ name, id, images, image }) {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

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
    slidesToShow: 2,
    speed: 500,
  };

  return (
    <>
      <Slider {...settings}>
        {gallery.map((item, index) => (
          <img
            onClick={() => {
              handleShow(item, index);
            }}
            src={item.image}
            className={styles.my_slide}
            alt={`photo poterie ${index}`}
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
