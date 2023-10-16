import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyCardBody from "../components/MyCardBody";
import { actuality } from "../data/dataList";

export default function Actualites() {
  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - Actualités</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`pb-2 d-flex flex-column justify-content-between`}>
        <div className={`${styles.my_container} container-xl mx-auto`}>
          <div className="row mx-0 justify-content-center">
            <NavBar />
          </div>
          <div className="row mx-0 mx-md-5 mb-2 justify-content-center align-items-center ">
            <div className={`col col-lg-11 col-xxl-9`}>
              <div className="card p-0 mb-3 shadow-lg border-0">
                <div
                  className={`${styles.bg_card} row g-0 p-4 d-flex flex-column flex-lg-row align-items-center bg-light rounded`}
                >
                  <div className={`col col-md-6 mt-md-4 mt-lg-0`}>
                    <img
                      src="/images/vue2.jpg"
                      className="img-fluid rounded-start"
                      alt="photo poterie"
                    />
                  </div>
                  <div className="col text-center">
                    <div className="fs-5 text-muted text-center mt-2">
                      Absente de France pour plusieurs années, je ne suis plus
                      en mesure de vous proposer mes créations sur les marchés.
                      On se retrouve dès mon retour ! Merci de votre
                      compréhension.
                    </div>
                    {/* {actuality.map((item) => {
                      return (
                        <div key={item.id} className="card-body">
                          <MyCardBody item={item} />
                        </div>
                      );
                    })} */}
                  </div>
                  {/* <div className="d-md-none fw-bold fs-6 mt-5 text-center">
                    Retrouvez aussi mes créations à la Cité Potière <br />6 rue
                    Saint Louis à Carcassonne
                  </div>
                  <div className="d-none d-md-block fw-bold fs-5 mt-5 text-center">
                    Retrouvez aussi mes créations à la Cité Potière <br />6 rue
                    Saint Louis à Carcassonne
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
