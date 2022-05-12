import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import "react-image-lightbox/style.css";

export default function CardGallery(props) {
  const images = props.gallery;
  const image = images.map((item) => item.image);

  return (
    <div className="card mb-1 me-1">
      <Link href={`/collections/${props.name}`}>
        <div className={`${styles.my_card} position-relative `}>
          <img
            className={`${styles.my_card_image2} card-img-top`}
            src={props.image}
            alt="poterie en gres"
          />
          <i className="bi bi-plus position-absolute top-50 start-50 translate-middle rounded-pill" />
          <div
            className={`${styles.my_bg} mt-2 ps-2 pe-2 position-absolute bottom-0 start-50 translate-middle`}
          >
            {props.name}
          </div>
          <div
            className={`${styles.my_bg2} d-none d-md-block d-lg-none p-1 mt-2 position-absolute bottom-0 start-50 translate-middle`}
          >
            {props.name}
          </div>
          <div className="mt-1 d-md-none text-center">{props.name}</div>
        </div>
      </Link>
    </div>
  );
}
