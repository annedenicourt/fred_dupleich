import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function NavBar() {
    const router = useRouter();

    return (  <>
            <div className="col-3 col-md-2 col-lg-1 mt-3 mb-4">
                <div className="">
                    <Image className=""
                        src="/images/logo_fred.png"
                        alt="logo Frederique Dupleich"
                        width={284}
                        height={284} 
                        layout="responsive"
                        priority='true'
                    />
                </div>
            </div>
            <h1 className="mt-6 mb-6  text-center">Frédérique Dupleich Céramiste</h1>
            <nav className="mb-3 mt-3 navbar navbar-expand-lg navbar-light border-bottom border-top pt-3">
                <div className="container-fluid justify-content-center">
                    <button className="mb-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center fs-5" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item me-4">
                                <Link href="/"><a className= {router.asPath == "/" ? ` nav-link fw-bold ${styles.active}` : "nav-link"}>Accueil</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/cours-stages"><a className= {router.asPath == "/cours-stages" ? `nav-link fw-bold ${styles.active}` : "nav-link "}>Cours-Stages</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/galerie"><a className= {router.asPath == "/galerie" ? `nav-link fw-bold ${styles.active}` : "nav-link "}>Galerie</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/a-propos"><a className= {router.asPath == "/a-propos" ? `nav-link fw-bold ${styles.active}` : "nav-link "}>À propos</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/actualites"><a className= {router.asPath == "/actualites" ? `nav-link fw-bold ${styles.active}` : "nav-link "}>Actualités</a></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link href="/contact"><a className= {router.asPath == "/contact" ? `nav-link fw-bold ${styles.active}` : "nav-link"}>Contact</a></Link>
                            </li>                       
                        </ul>
                    </div>
                </div>
            </nav>                    
</>
)
}

