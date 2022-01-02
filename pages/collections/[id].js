import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import { categories } from '../../data/dataList';

export default function Collection(params) {
  const router = useRouter();
  const { id } = router.query;

  const filter = categories.filter((category) => category.id === id);
  const filter2 = categories.filter((category) => category.name === params.params.id);
  console.log(filter);
  console.log(filter2);


  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - Actualités</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`${styles.my_container2} container px-0 mx-auto`}>
          <div className="row mx-5 justify-content-center">
            <NavBar />
          </div>
          <div className="row mx-0 mt-5 pt-4 pb-5 bg-light justify-content-center">
            <div className="col-9">
              <div className="mb-3">
                <div className={`${styles.my_font} fs-4 me-3`}>Collections</div>
                <div className="fs-4">{filter2[0].name}</div>
              </div>
              <Carousel
                name={filter2[0].name}
                id={filter2[0].id}
                images={filter2[0].gallery}
                image={filter2[0].image}
              />
            </div>
            <div className="text-center mt-5">
              <button className="border rounded-pill p-2" type="button">
                <a className="text-reset" href="/galerie">
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
    }))
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }) {
    // Pass post data to the page via props
    return { props: { params } }
  }