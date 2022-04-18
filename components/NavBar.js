import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <div className="col-3 col-md-2 col-lg-1 mt-3 mb-2">
        <div className="w-75">
          <Link className="" href="/">
            <Image
              className={`${styles.my_link}`}
              src="/images/logo_fred.png"
              alt="logo Frederique Dupleich"
              width={284}
              height={284}
              layout="responsive"
              priority="true"
            />
          </Link>
        </div>
      </div>
      <h1 className="mb-0 text-center">Frédérique Dupleich</h1>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-center">
          <button
            className="mb-3 navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              {/* <li className="nav-item me-3">
                <Link href="/galerie">
                  <a
                    className={
                      router.asPath == "/galerie"
                        ? `nav-link fw-bold ${styles.active}`
                        : "nav-link "
                    }
                  >
                    Galerie
                  </a>
                </Link>
              </li> */}
              <li className="nav-item me-3">
                <Link href="/a-propos">
                  <a
                    className={
                      router.asPath == "/a-propos"
                        ? `nav-link fw-bold ${styles.active}`
                        : "nav-link "
                    }
                  >
                    À propos
                  </a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/stages-cours">
                  <a
                    className={
                      router.asPath == "/stages-cours"
                        ? `nav-link fw-bold ${styles.active}`
                        : "nav-link "
                    }
                  >
                    Stages
                  </a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/actualites">
                  <a
                    className={
                      router.asPath == "/actualites"
                        ? `nav-link fw-bold ${styles.active}`
                        : "nav-link "
                    }
                  >
                    Actualités
                  </a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/contact">
                  <a
                    className={
                      router.asPath == "/contact"
                        ? `nav-link fw-bold ${styles.active}`
                        : "nav-link"
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
