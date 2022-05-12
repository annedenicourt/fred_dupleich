import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function MyCardBody({ item }) {
  return (
    <div>
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text">
        {item.infos}
        <br />
        {item.infos2}
        <br />
        {item.infos3 ? item.infos3 : ""}
      </p>
      <p class="card-text">{item.adresse}</p>
    </div>
  );
}
