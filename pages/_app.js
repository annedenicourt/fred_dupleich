import '../styles/globals.css'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return ( <>
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content="https://frederiquedupleich.fr/"/>
			<meta property="og:title" content="Frédérique Dupleich Céramiste"/>
			<meta property="og:image" content="https://annedenicourt.com/images/laptop.png"/>
      <meta property="og:description" content="Frédérique Dupleich Céramiste"/>
      <meta property="og:site_name" content="Frédérique Dupleich Céramiste" />
      <meta property="og:type" content="portfolio" />
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&display=swap" rel="stylesheet"></link>
      <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
      integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
      crossOrigin="anonymous"></script>
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
      integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
      crossorigin="anonymous"></script>    
    </Head>

    <Component {...pageProps} /> 
</>
  )
}

export default MyApp

