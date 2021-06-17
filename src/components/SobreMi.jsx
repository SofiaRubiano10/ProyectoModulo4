// importacion React
import React from 'react'
// importacion estilos CSS
import '../utils/CSS/sobremi.css'
//importacion imagen
import Sofia1 from '../utils/images/yomor.png'


function SobreMi() {
    return(
        <div className="prinabrriba">
            <div className="sobreMi">
                <div className="texting">
                    <h1>Guaracha mi vida</h1>
                    <p> Pariatur do nulla fugiat ullamco aliqua incididunt eu esse nisi veniam nostrud pariatur. Do laboris eiusmod veniam anim in officia duis fugiat id esse esse non eu velit. Ex ut deserunt culpa reprehenderit velit consequat officia ea laboris officia. </p>
                </div>
                <div className="ima">
                    <img src={Sofia1} alt="es Sofia1"/>
                </div>
                
            </div>
            <div className="botones">
                <div className="bo1">
                    <button type="button">VER CV</button>
                </div>
                <div className="bo2">
                    <a href="https://github.com/SofiaRubiano10" ><button type="button">IR A GITHUB</button></a>
                </div>
                
            </div>
        </div>
    )
}

export default SobreMi