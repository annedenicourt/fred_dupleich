import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function NavBar2() {
    const router = useRouter();

    function showMenu() {
        const btn = document.querySelector("button.mobile-menu-button");
		const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");

    }

    return (  <>

<nav class="bg-white shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
                    <div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                            onClick={showMenu}
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
						<div>
							<a href="#" class="flex items-center py-4 px-2">
								<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"/>
							</a>
						</div>
                        
                        
						<div class="hidden md:flex items-center space-x-1">
                            <Link href="/"><a className= {router.asPath == "/" ? ` px-3 py-2 font-medium ${styles.active}` : "text-white px-3 py-2 font-medium"}>Accueil</a></Link>
                            <Link href="/a-propos"><a className= {router.asPath == "/a-propos" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>À propos</a></Link>
                            <Link href="/atelier"><a className= {router.asPath == "/atelier" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>Atelier</a></Link>
                            <Link href="/actualites"><a className= {router.asPath == "/actualites" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>Actualités</a></Link>
                            <Link href="/contact"><a className= {router.asPath == "/contact" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>Contact</a></Link>
						</div>
					</div>
					
					
				</div>
			</div>
			<div class="hidden mobile-menu">
            <Link href="/"><a className= {router.asPath == "/" ? ` px-3 py-2 font-medium ${styles.active}` : "text-white px-3 py-2 font-medium"}>Accueil</a></Link>
                            <Link href="/a-propos"><a className= {router.asPath == "/a-propos" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>À propos</a></Link>
                            <Link href="/atelier"><a className= {router.asPath == "/atelier" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>Atelier</a></Link>
                            <Link href="/actualites"><a className= {router.asPath == "/actualites" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>Actualités</a></Link>
                            <Link href="/contact"><a className= {router.asPath == "/contact" ? `px-3 py-2 font-medium ${styles.active}` : "px-3 py-2 font-medium"}>Contact</a></Link>
			</div>
			
		</nav>



</>

    )
}

