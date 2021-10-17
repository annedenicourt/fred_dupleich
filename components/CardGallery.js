import styles from '../styles/Home.module.css'
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function CardGallery(props) {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const images = props.gallery
    const image = images.map(function (item) {return item.image})

  return (
        <div className="position-relative mb-3 me-1">
            <div className={`${styles.my_card}`} onClick={handleShow}>
                <img className={`${styles.my_card_image}`} src={props.image} alt="poterie en gres"/>
                <i className="bi bi-plus position-absolute top-50 start-50 translate-middle rounded-pill"></i>
            </div>
            <div className="mt-1">{props.name}</div>
            {isOpen && (
            <Lightbox
                mainSrc={image[photoIndex]}
                nextSrc={image[(photoIndex + 1) % image.length]}
                prevSrc={image[(photoIndex + image.length - 1) % image.length]}
                onCloseRequest={handleClose}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + image.length - 1) % image.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % image.length)
                }
            />
            )}
        </div>   
  )
}
