// importacion React
import React from 'react'
// importacion estilos CSS
import '../utils/CSS/cuerpo.css'
// importacion imagenes
import Sofia from '../utils/images/Sofia.png'
import Telefono from '../utils/images/telefono.svg'
import Ubi from '../utils/images/ubi.svg'
import Email from '../utils/images/email.svg'

const Cuerpo = () => {
    return(
        <div className="contePrincipal">
        {/* contenedor que lleva toda la hoja de vida  */}
            <div className="conteTodo">  
            {/* contenedor parte izquierda  */}
                <div className="parteIzq">
                {/* contenedor que lleva la imagen */}
                    <div className="conteImg">
                        <img src={Sofia} alt="es Sofia"/>
                    </div>
                    <div className="Texto">
                        <h3>SOBRE MÍ</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
                            </p>
                        <h3>CONTACTO</h3>
                            <p><img src={Ubi} className="cont" alt="Ubi"/>Lorem ipsum dolor sit amet</p>    
                            <p><img src={Telefono} className="cont" alt="Telefono"/>Lorem ipsum dolor sit amet</p>
                            <p><img src={Email} className="cont" alt="Email"/>Lorem ipsum dolor sit amet</p>
                            
                            
                        <h3>HABILIDADES</h3>
                        {/* barras de habilidades */}
                            <ul id="skill">
                                <li><span class="bar graphic-design"></span><h3>Diseño Gráfico</h3></li>
                                <li><span class="bar html"></span><h3>Html</h3></li>
                                <li><span class="bar CSS"></span><h3>CSS</h3></li>
                                <li><span class="bar React"></span><h3>React</h3></li>
                            </ul>
                    </div>
                </div> 
                {/* contenedor parte derecha*/}
                <div className="parteDer">
                    <h1>MARÍA SOFÍA DE LOS ÁNGELES REYES RUBIANO</h1>
                    <h2>Junior Front End Developer</h2>
                    <div className="Texto">
                        <h3>EXPERIENCIA PROFESIONAL</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
                            </p>
                        <h3>FORMACIÓN</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
                            </p>
                        <h3>IDIOMAS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
                            </p>
                    </div>
                </div> 
           </div> 
           <div className="boton">
                <a href="https://github.com/SofiaRubiano10" ><button type="button">IR A GITHUB</button></a>
                <button type="button">SOBRE MI</button>
            </div>
        </div>
    )
}

export default Cuerpo