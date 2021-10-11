import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {

    let date = new Date
    let currentYear = date.getFullYear()

    return (  <>
        <div className="row mx-0 pb-3 mt-5">
            <div className="col ">
                <div className="text-center fw-bold">Tous droits réservés ® Copyright Frédérique Dupleich Céramiste {currentYear}</div>
            </div>
        </div>
    </>
    )
}