import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card'
import Footer from '../components/Footer'

export default function Actualites() {
  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - Actualités</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div className={`${styles.my_container} container-fluid mx-auto`}>            
                <div className="row mx-0 justify-content-center">
                    <NavBar/>
                </div>
                <div className="row mx-0 pb-5 justify-content-center">
                    <div className="col-5 px-O">
                            <Image className=""
                                src="/images/spoons2.jpeg"
                                alt=""
                                width={2448}
                                height={3264} 
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