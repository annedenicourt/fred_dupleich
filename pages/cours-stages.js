import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card'
import Footer from '../components/Footer'


export default function Atelier() {
  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - Cours-Stages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div className={`${styles.my_container} mx-auto`}>            
                <div className="row mx-0 justify-content-center">
                    <NavBar/>
                </div>
                <div className="row mx-0 d-flex flex-column flex-md-row justify-content-center align-items-center">
                    
                    <div className="col col-md-5">
                        <Image className=""
                            src="/images/mains2.jpeg"
                            alt=""
                            width={1696}
                            height={2082} 
                            layout="responsive"
                            priority='true'
                        />                   
                    </div>
                    <div className={`${styles.my_position} col col-md-5`}>
                        <div className="mb-3">
                            <p className="fs-4 mx-4 mb-5 text-center">Je vous propose d'octobre à juin des cours hebdomadaires mais aussi des stages thématiques dans mon atelier situé à Tournefeuille.</p>
                        </div>
                        <div className={`p-3 px-lg-5 py-lg-3 mt-4 mb-4 mt-md-0 bg-light shadow`}>
                            <h1 className="mb-4">Cours de modelage</h1>
                            <table className="table table-bordered table-hover text-center fs-5">
                                <thead>
                                    <tr>
                                    <th scope="col">Lundi</th>
                                    <th scope="col">Jeudi</th>
                                    <th scope="col">Vendredi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>de 10h à 12h</td>
                                    <td></td>
                                    <td>de 10h à 12h</td>
                                    </tr>
                                    <tr>
                                    <td>de 14h à 16h</td>
                                    <td>de 17h à 19h</td>
                                    <td>14h à 16h</td>
                                    </tr>
                                    <tr>
                                    <td>de 19h à 21h</td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                </div>
                <div className="row mx-0 pb-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div className={`${styles.my_position} col col-md-5`}>
                        <div className={`p-3 px-lg-5 py-lg-3 bg-light shadow`}>
                            <h2 className="mb-4 fs-1">Stages</h2>
                            <div className="fs-4 fw-bold mb-3">Décors de Noel, pampilles, boules, guirlandes etc… en porcelaine papier</div>
                            <div className="">Quand ? Le samedi 13 novembre de 14h à 17h</div>
                            <div className="mb-3 border-bottom pb-4">Prix ? 75€</div> 

                            <div className="fs-4 fw-bold mt-3 mb-3">Fruits/légumes/végétaux à réaliser en grès de différentes couleurs</div>
                            <div className="">Quand ? Date à venir</div>
                            <div className="mb-3 border-bottom pb-4">Prix ? 90€</div>
                            <div className="text-muted text-center mt-2">Les prix des stages comprennent les terres, l’émail, le matériel et les cuissons (1 à 2 cuissons)</div>                   
                        </div>
                    </div>
                    <div className="col col-md-5 d-none d-md-block ">
                        <Image className=""
                            src="/images/mains3.jpeg"
                            alt=""
                            width={1696}
                            height={2082} 
                            layout="responsive"
                            priority='true'
                        />                   
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    </div>
  )
}