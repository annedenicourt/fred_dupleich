import React from 'react';
import Head from 'next/head';
import Gallery from 'react-photo-gallery';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import { photos } from '../data/dataList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={`${styles.my_container} container mx-auto`}>
          <div className="row mx-5 justify-content-center ">
            <NavBar />
          </div>

          <div className="row mx-0 justify-content-center">
            <div className="col-9 pb-5">
              <Gallery photos={photos} />
            </div>
            <div className="text-center mb-5">
              <button className="border rounded-pill p-2" type="button">
                <a className="text-reset" target="_blank" href="https://www.instagram.com/frederique.dupleich/?hl=fr" rel="noreferrer">
                  <i className="bi bi-instagram ms-2 me-3" />
                  Plus de photos sur Instagram
                </a>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

/* <div className="row mx-0 justify-content-center">
<div className="col pb-5">
    <div class="card">
        <img src="/images/artichaut2.jpeg" className={`card-img-top`} alt="..."/>
    </div>
</div>
<div className="col pb-5">
<div class="card">
        <img src="/images/artichaut2.jpeg" className={`card-img-top`} alt="..."/>
    </div>
</div>
</div>
*/
