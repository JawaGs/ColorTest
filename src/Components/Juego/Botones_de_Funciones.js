import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

const Botones_de_Funcion = (props) => {
    const arrow = `\u2b05\ufe0f`;

    return (
        <div >
            <ButtonGroup className='w-100 mb-2'>
                <Button onClick={props.volverAtras} className='mx-4 py-2 w-50' variant="secondary">{arrow}</Button>
                <Button onClick={props.borrarClave} className='mx-4 py-2 w-50' variant="secondary">Borrar Clave</Button>
            </ButtonGroup>

            <Button className='my-1 py-3 h4' onClick={props.generarClave} block variant="secondary">Generar Clave</Button>
            <Button className='my-1 py-3' onClick={props.compararClave} block variant="secondary">Comparar Clave</Button>
        </div>
    )
}

export default Botones_de_Funcion
