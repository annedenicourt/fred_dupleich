import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Apropos() {
  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - À propos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`position-relative pb-2 d-flex flex-column justify-content-between`}
      >
        <div className={`${styles.my_container} container-xl pb-2 mx-auto`}>
          <div className="row mx-0 justify-content-center">
            <NavBar />
          </div>
          <div className="row mx-0 mx-md-5 mb-2 justify-content-center align-items-center ">
            <div className={`col col-lg-11 col-xxl-9`}>
              <div className="card mb-3 shadow-lg border-0">
                <div
                  className={`${styles.bg_card} row g-0 p-4 d-flex flex-column flex-lg-row align-items-center bg-light rounded`}
                >
                  <div className="col col-md-6 mt-md-4 mt-lg-0">
                    <img
                      src="/images/four.jpg"
                      className="img-fluid"
                      alt="four céramique"
                    />
                  </div>
                  <div className="col text-center">
                    <div className="card-body py-1">
                      <div className="lh-lg px-1">
                        &ldquo;De Frédérique, je sais certaines influences, les
                        chocs esthétiques, les strates accumulées de sa mémoire
                        sensible. Son Oeil assuré guide ses mains affairées sur
                        la boule de terre, souvent de grès, parfois de
                        porcelaine.
                        <strong className="fs-5">
                          Ici,le tour est remisé, le moule inexistant.
                        </strong>{" "}
                        Il n&lsquo;est pas question de gagner du temps.
                        Frédérique avance confiante dans les processus plus
                        lents du pincé, du colombin ou de la plaque.
                      </div>

                      <div className="fw-bold fs-5 px-1">
                        La main cherche, creuse, pince, modèle, s&lsquo;agite et
                        s&lsquo;exalte.
                      </div>
                      <div className="lh-lg px-1">
                        La forme ainsi révélée, il s&lsquo;agit parfois de lui
                        donner du grain, de la texture en grattant, scarifiant,
                        &ldquo;empreintant&ldquo; la surface.
                      </div>
                      <div className="lh-lg px-1">
                        Ses propres émaux viennent envelopper chacune des
                        pièces. Comme une peau. Ses blancs
                        &ldquo;cailloux&ldquo;, ses gris &ldquo;célestes&ldquo;
                        sont autant de{" "}
                        <span className="fw-bold fs-5">
                          teintes intemporelles
                        </span>{" "}
                        à associer à toutes les autres. Ses pièces en terre
                        touchent.&ldquo;
                      </div>
                      <div className="mt-1 mx-4 text-end">Sandrine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-5 mb-3 justify-content-center align-items-center">
              <div className={`col text-center`}>
                <div className="text-center mt-3 mt-xXl-2 mb-4">
                  <button className="border shadow rounded-pill px-3 py-2">
                    <a className="" href="/">
                      Découvrez mon univers{" "}
                    </a>
                  </button>
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
