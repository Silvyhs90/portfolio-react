import NavBar from './NavBar'; 
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'

const Layout = ({ children, footer = true }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url);
            NProgress.start();
        }

            router.events.on('routeChangeStart', handleRouteChange)
            
            router.events.on('routeChangeComplete', () => NProgress.done());
            
            return () => {
                router.events.off('routeChangeStart', handleRouteChange)
            }
    },[])

    return (
        <>
        <NavBar/>

       <main className="container py-4 cuerpo">
           {children}
       </main>
      {
          footer && (
            <footer className="container bg-secondary text-light text-center">
            <div className="container py-4">
                <h1>&copy;Silvina Saucedo Portfolio</h1>
                <h3>Mail: silvina.saucedo90@gmail.com</h3>
                <p>{new Date().getFullYear()}</p>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
          )
      }

   </>

    )
}

export default Layout;