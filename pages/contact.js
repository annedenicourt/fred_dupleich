import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import Footer from '../components/Footer'

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_if9q8wq', 'contact_form', e.target, 'user_BwL24v0D7KuEvBfg9MBkR')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Super !',
                text: 'Votre message a bien été envoyé',
              })
              document.getElementById('contact_form').reset()

          }, (error) => {
              console.log(error.text);
          });
    }

  return (
    <div className="">
      <Head>
        <title>Frédérique Dupleich Céramiste - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
            <div className={`${styles.my_container2} container mx-auto`}>            
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
                    <div className="col-5 px-O">
                        <h2 className="mt-5 text-center">Laissez-moi un message</h2>
                        <div className={`text-center mt-3`}>
                            <img src="/images/flower2.png" width="30" alt="" />   
                        </div> 
                        <form className="text-center rounded" id="contact_form" onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <div className="">
                                <label htmlFor="name"></label>
                                <input className="form-control" type="text" name="user_name" id="name" placeholder="Votre nom" required />
                                <label htmlFor="email"></label>
                                <input className="form-control" type="email" name="user_email" id="email" placeholder="Votre adresse mail" required />
                            </div>
                            <div>
                                <label htmlFor="message"></label>
                                <textarea className="mb-3 form-control" rows="5" name="message" id="message" placeholder="Votre message" required />
                            </div>
                            <button className='btn btn-outline-dark mt-3 mb-3 fw-bold' type="submit"><i className="bi bi-envelope-fill"></i> ENVOYER</button>
                        </form>
                        <div className="text-center mt-5">
                            <button className="border rounded-pill p-2"><a className="text-reset" target="_blank" href="https://www.instagram.com/frederique.dupleich/?hl=fr"><i className="bi bi-instagram ms-2 me-3"></i>Retrouvez-moi sur Instagram</a></button>            
                        </div>
                    </div>
                </div>   
            </div>
            <Footer/>
        </main>
    </div>
  )
}