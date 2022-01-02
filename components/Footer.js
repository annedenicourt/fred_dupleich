import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {

    let date = new Date
    let currentYear = date.getFullYear()

    return (  <>
        <div className={`${styles.my_footer} row mx-0 pb-1 align-items-center`}>
            <div className="col ">
                <div className="text-center fw-bold">Tous droits réservés ® Copyright Frédérique Dupleich Céramiste {currentYear}</div>
            </div>
        </div>
    </>
    )
}