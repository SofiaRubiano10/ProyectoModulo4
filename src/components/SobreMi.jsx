// importacion React
import React from 'react'
// importacion estilos CSS
import '../utils/CSS/sobremi.css'
//importacion imagen
import Sofia1 from '../utils/images/yomor.png'

import {Link} from 'react-router-dom'


function SobreMi() {
    return(
        <div className="prinabrriba">
            <div className="sobreMi">
                <div className="texting">
                    <h1>¡HOLA SOY SOFÍA!</h1>
                    <p> Mi nombre completo es muyyy largo, así que mejor soy solo Sofía. Tengo 18 años, soy estudiante. Tengo un amplio campo de gustos, pero mis gustos que más sobre salen son mi gusto por la ciencia, tecnología y arte. Me gusta aprender cosas nuevas, generalmente más sobre mis intereses y gustos aunque también me gusta salir de mi zona de confort y aprender cosas nuevas. De eso se trata la vida, de aprender :)</p>
                </div>
                <div className="ima">
                    <img src={Sofia1} alt="es Sofia1"/>
                </div>
                
            </div>
             {/* dic con los botones  */}
            <div className="botones">
                <div className="bo1">
                 {/* boton para viajar en la página*/}
                    <Link to="/hoja">
                        <button type="button">VER CV</button>
                    </Link>
                </div>
                <div className="bo2">
                {/* boton para ir a git hub  */}
                    <a href="https://github.com/SofiaRubiano10" ><button type="button">IR A GITHUB</button></a>
                </div>
                
            </div>
        </div>
    )
}

export default SobreMi