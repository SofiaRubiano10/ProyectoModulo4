// importacion React
import React from 'react'
// importacion estilos CSS
import '../utils/CSS/cabecera.css'
// importacion imagen
import Sofia from '../utils/images/image.png'

const Cabecera = () => {
    return(
        <div className="cabeText">
            <img src={Sofia} alt="es Sofia"/>
        </div>
        
    )
}

export default Cabecera