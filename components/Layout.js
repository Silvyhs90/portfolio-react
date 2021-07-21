import NavBar from './NavBar'; 
import Head from 'next/head';

const Layout = ({ children }) => (
    <>
         <NavBar/>

        <main className="container py-4 cuerpo">
            {children}
        </main>
        <footer className="container bg-primary text-light text-center">
            <div className="container py-4">
                <h1>&copy;Silvina Saucedo Portfolio</h1>
                <p>{new Date().getFullYear()}</p>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>

    </>

)

export default Layout;