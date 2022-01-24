import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";

export default function Atelier() {
  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - Cours-Stages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={`${styles.my_container} container-xl pb-2 mx-auto`}>
          <div className="row mx-0 justify-content-center">
            <NavBar />
          </div>
          <div className="row mx-5 mb-2 justify-content-center align-items-center">
            <div className={`col col-lg-11 col-xxl-9`}>
              <div className="card p-0 mb-3 shadow-lg border-0">
                <div
                  className={`${styles.bg_card} row g-0 d-flex flex-column flex-lg-row align-items-center border-0 rounded`}
                >
                  <div className="col">
                    <img
                      src="/images/mains2.jpeg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col text-center">
                    <div className="card-body">
                      <h2 className=" mb-5 mb-lg-5 fs-1">Stages</h2>
                      <h5 className="card-title fw-bold mb-3">
                        Décors de Noel, pampilles, boules, guirlandes etc… en
                        porcelaine papier
                      </h5>
                      <div className="">
                        Quand ? Le samedi 13 novembre 2021 de 14h à 17h
                      </div>
                      <div className="mb-3 border-bottom pb-4">Prix ? 75€</div>
                      <h5 className="card-title fw-bold mb-3">
                        Fruits/légumes/végétaux à réaliser en grès de
                        différentes couleurs
                      </h5>
                      <div className="">Quand ? Date à venir</div>
                      <div className="mb-3 border-bottom pb-4">
                        Prix ? À définir
                      </div>
                      <h5 className="card-title fw-bold mb-3">
                        Découverte et élaboration d'engobes
                      </h5>
                      <div className="">Quand ? Date à venir</div>
                      <div className="mb-3 border-bottom pb-4">
                        Prix ? À définir
                      </div>
                      <div className="text-muted text-center mt-2">
                        Le prix des stages comprend la terre, l’émail, le
                        matériel et les cuissons
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-5 mb-3 justify-content-center align-items-center">
            <div className={`col text-center`}>
              <div className="mt-1 mb-lg-5 text-center">
                Les stages se déroulent dans mon atelier situé à Tournefeuille
                (31).
              </div>
              <div className="text-center mt-4 mt-xXl-2 mb-4">
                <button className="border shadow rounded-pill px-3 py-2">
                  <a className="text-reset" href="/contact">
                    Renseignements / Inscriptions
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

/*<div className="row mx-5 mb-4 bg-light d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className={`col-6 col-xl-5 py-2 p-lg-0`}>
                        <Image className=""
                            src="/images/mains2.jpeg"
                            alt=""
                            width={1696}
                            height={2082} 
                            layout="responsive"
                            priority='true'
                        />               
                    </div>
                    <div className={`col-6 col-xl-5 p-0 text-center`}>
                        <div className={`px-0 px-lg-5 py-2 mb-4 `}>
                            <h2 className=" mb-5 mb-lg-5 fs-1">Stages</h2>
                            <div className="fs-4 fw-bold mb-3">Décors de Noel, pampilles, boules, guirlandes etc… en porcelaine papier</div>
                            <div className="">Quand ? Le samedi 13 novembre de 14h à 17h</div>
                            <div className="mb-3 border-bottom pb-4">Prix ? 75€</div> 

                            <div className="fs-4 fw-bold mt-3 mb-3">Fruits/légumes/végétaux à réaliser en grès de différentes couleurs</div>
                            <div className="">Quand ? Date à venir</div>
                            <div className="mb-3 border-bottom pb-4">Prix ? À définir</div>
                            <div className="text-muted text-center mt-2">Les prix des stages comprennent les terres, l’émail, le matériel et les cuissons (1 à 2 cuissons)</div>
                        </div>
                    </div>
                </div>
*/
