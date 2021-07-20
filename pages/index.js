import Layout from "../components/Layout";

const Index= () => (
    <Layout>

        {/*Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-primary text-light">
                    <div className="row">
                        <div className="col-md-4">
                        <img src="yo.png" alt="imagen" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                        <h1>Silvina Saucedo</h1>
                        <h3>FrontEnd Developer</h3>
                        <p>
                        Mi nombre es Silvina Saucedo, tengo 30 años, estoy cursando la carrera de Analista de Sistemas de Computación. Cuento con conocimientos en Desarrollo Front y Back-end, utilizando tecnologías 
                        como JAVASCRIPT, JAVA, POO, MySQL, HTML, CSS, Bootstrap, PHP, C#, Git y Paquete Office.
                        Además, tengo algunos conocimientos en UX/UI, Photoshop, InVision, Material Desing y Gnu/Linux.
                        Soy una persona dispuesta al trabajo en equipo, organizada, orientada a objetivos, a la resolución de problemas, creativa y detallista. Mi objetivo principal es trabajar en proyectos desafiantes, aprender y que me brinden la experiencia necesaria para seguir progresando
                        </p>
                        </div>
                    </div>
                </div>

            </div>
        </header>

        {/**Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                            <h1>Habilidades</h1>

                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width:'80%'}}></div>
                            </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experiencia Laboral</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>

)

export default Index;