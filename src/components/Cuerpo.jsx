// importacion React
import React from 'react'
// importacion estilos CSS
import '../utils/CSS/cuerpo.css'
// importacion imagenes
import Sofia from '../utils/images/Sofia.png'
import Telefono from '../utils/images/telefono.svg'
import Ubi from '../utils/images/ubi.svg'
import Email from '../utils/images/email.svg'
// importacion de links 
import {Link} from 'react-router-dom'


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
                            <p>Soy María Sofía de los Ángeles Reyes Rubiano, tengo 18 años. Soy persona muy creativa, empática y con gran liderazgo. Tengo conocimientos en leguajes como HTML, CSS, JavaScript y React. También sé manejar herramientas como PhotoShop y Figma </p>
                        <h3>CONTACTO</h3>
                            <p><img src={Ubi} className="cont" alt="Ubi"/>Bogotá - Colombia</p>    
                            <p><img src={Telefono} className="cont" alt="Telefono"/>3023266678</p>
                            <p><img src={Email} className="cont" alt="Email"/>sofia@gmail.com</p>
                            
                            
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
                        <h3>FORMACIÓN</h3>
                            <p>Bachiller académico -    Liceo Femenino Mercedes Nariño</p>
                            <p>Diplomado codificación y programación -    Pontificia Universidad Javeriana</p>
                            <p>Técnico Programación Front-end -    Kuepa</p>
                        <h3>IDIOMAS</h3>
                            <p> Español - Nativo </p>
                            <p> Inglés - B1 </p>
                            <p> Francés - A1 </p>
                            <p> Alemán - A1 </p>
                    </div>
                </div> 
           </div> 
           {/* dic con los botones  */}
           <div className="boton">
                {/* boton para ir a git hub  */}
                <a href="https://github.com/SofiaRubiano10" ><button type="button">IR A GITHUB</button></a>
                {/* boton para viajar en la página*/}
                <Link to="/">
                    <button type="button">SOBRE MI</button>
                </Link>
            </div>
        </div>
    )
}

export default Cuerpo