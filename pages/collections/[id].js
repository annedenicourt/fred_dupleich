import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Carousel2 from "../../components/Carousel2";
import Carousel3 from "../../components/Carousel3";
import { categories, categories2 } from "../../data/dataList";

export default function Collection(params) {
  const router = useRouter();
  const { id } = router.query;

  const filter2 = categories.filter((category) => category.name === id);
  //console.log(filter2);

  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - {filter2[0].name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`pb-2 d-flex flex-column justify-content-between`}>
        <div className={`${styles.my_container} container-xl px-0 mx-auto`}>
          <div className="row mx-5 justify-content-center">
            <NavBar />
          </div>
          <div className="row mx-0 pb-5 justify-content-center">
            <div className="col-10 d-none d-lg-block">
              <div className="mb-3">
                <div className="fs-5 fw-bold">{filter2[0].name}</div>
              </div>
              <Carousel
                name={filter2[0].name}
                id={filter2[0].id}
                images={filter2[0].gallery}
                image={filter2[0].image}
              />
            </div>
            <div className="col-md-11 d-none d-md-block d-lg-none">
              <div className="mb-3">
                <div className="fs-5 fw-bold">{filter2[0].name}</div>
              </div>
              <Carousel2
                name={filter2[0].name}
                id={filter2[0].id}
                images={filter2[0].gallery}
                image={filter2[0].image}
              />
            </div>
            <div className="col-11 d-block d-md-none">
              <div className="mb-3">
                <div className="fs-5 fw-bold">{filter2[0].name}</div>
              </div>
              <Carousel3
                name={filter2[0].name}
                id={filter2[0].id}
                images={filter2[0].gallery}
                image={filter2[0].image}
              />
            </div>
            <div className="text-center mt-5">
              <button className="border rounded-pill p-2" type="button">
                <a className="" href="/">
                  <i className="bi bi-arrow-left-short me-2" />
                  Revenir à la galerie
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

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { id: category.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return { props: { params } };
}
