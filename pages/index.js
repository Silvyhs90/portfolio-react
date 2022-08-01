import Layout from "../components/Layout";
import {skills,experiences,lang,schools,academics, projects} from '../profile';
import Link from "next/dist/client/link";

const Index= () => (
    <Layout>
        {/* Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="yo.png" alt="imagen" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Silvina Saucedo</h1>
                            <h3>FrontEnd Developer</h3>
                        <p>
                        Mi nombre es Silvina Saucedo, tengo 31 años, estoy cursando la carrera de Analista de Sistemas de Computación. Cuento con conocimientos en Desarrollo Front y Back-end, utilizando tecnologías 
                        como JAVASCRIPT, JAVA, POO, consultas en base de datos MySQL, Python, HTML, CSS, Bootstrap, PHP, C#, Git y Paquete Office.
                        Además, tengo algunos conocimientos en UX/UI, Photoshop, InVision, Material Desing y Gnu/Linux.
                        Soy una persona dispuesta al trabajo en equipo, organizada, orientada a objetivos, a la resolución de problemas, creativa y detallista. Mi objetivo principal es trabajar en proyectos desafiantes, aprender y que me brinden la experiencia necesaria para seguir progresando
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/**Second section */}
        <section className="row">
            <div className="col-md-4 py-2">
                <div className="card bg-light">
                    <div className="card-body">
                            <h1>Habilidades</h1>
                            {
                                skills.map(({skill, percentage}, i) => (
                                    <div className="py-3" key={i}>
                                       <h5>{skill}</h5>
                                            <div className="progress">
                                                <div className="progress-bar" 
                                                role="progressbar"
                                                 style={{width:`${percentage}%`}}>
                                                 </div>
                                            </div>                                 
                                        </div>
                                ))}
                    </div>
                </div>
            </div>
                <div className="col-md-8 py-2">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experiencia Laboral</h1>
                            <ul>
                                {
                                    experiences.map(({title,description,from,to}, index) =>(
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="card-body py-2">
                            <h1>Formacion Academica</h1>
                        <ul className="py-2">
                                {
                                    schools.map(({school,name,from,to}, index) =>(
                                        <li key={index}>
                                            <h3>{name}</h3>
                                            <h4>{school}</h4>
                                            <h5>{from}-{to}</h5>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="card-body py-2">
                            <h1>Cursos</h1>
                            <ul className="py-2 my-2">
                                {
                                    academics.map(({name,where,from,to}, index) =>(
                                        <li key={index}>
                                            <h3>{name}</h3>
                                            <h4>{where}</h4>
                                            <h5>{from}-{to}</h5>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="card-body py-2">
                            <h1>Idiomas</h1>
                            <ul className="py-2 my-2">
                                {
                                    lang.map(({name,level}, index) =>(
                                        <li key={index}>
                                            <h3>{name}</h3>
                                            <h4>{level}</h4>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
   
   {/*Portfolio Section */}
   <div classname="row">
       <div className="col-md-12">
           <div className="card card-body bg-secondary">
               <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-light">Portfolio</h1>
                    </div>
                   {
                       projects.map(({name,description,image,site, site2},i) => (
                        <div className="col-md-4 p-2" key={i}>
                        <div className="card h-100">
                            <div className="overflow">
                                <img src={`/${image}`} alt="imagen del repo" className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <a href={site} target="_blank" className="ml-5"> Ver Codigo </a>
                                <br />
                                <a href={site2} target="_blank"> Ver Pagina </a>
                            </div>

                        </div>
                    </div>
                       ))
            }
               </div>
               <div className="text-center mt-4">
                    <Link href="/portfolio">
                        <a className="btn btn-outline-light">Mas proyectos</a>
                    </Link>
                </div>
           </div>
       </div>
   </div>
   
    </Layout>

)

export default Index;