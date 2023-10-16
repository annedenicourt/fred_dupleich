import React from "react";
import styles from "../styles/Home.module.css";

export default function Course({ cours, key }) {
  return (
    <div className="card mb-1 me-1">
      <h5 className="card-title fw-bold mb-3">{cours.title}</h5>
      <div className="">Quand ? {!cours.infos ? "À venir" : cours.infos}</div>
      <div className="mb-3 border-bottom pb-4">
        Prix ? {!cours.price ? "À définir" : `${cours.price}€`}
      </div>
    </div>
  );
}
