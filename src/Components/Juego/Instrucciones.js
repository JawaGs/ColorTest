import React from 'react'
import { Button } from 'react-bootstrap'
import Bienvenida from '../Funciones/Bienvenida'

Bienvenida()

function Instrucciones() {
    return (
        <section className=' bg-secondary col-sm-10 col-md-4 contenedor__instrucciones ml-5 mt-3 text-center '>
            <div className='p-3 '>
                <p>
                    El sistema genera un código de seguridad que consiste en una secuencia de cuatro colores. <br /><br />
                    Los colores posibles con su letra asociada son:<br />
                    Rojo ------> R<br />
                    Azul ------> A<br />
                    Amarillo ------> M<br />
                    Verde ------> V<br />
                    Naranja	------> N<br />
                    Violeta	------>	I<br /><br />

                    Para empezar, presione el boton "Generar Clave",luego pulse los botones que representan los cuatro colores que piense que se corresponde con la clave de la puerta. A continuacion pulse "Comparar Clave ", repita esto hasta que descifre la clave o que el cientifico lo descubra y termine el juego.<br /><br />

                    Tienes 10 oportunidades antes de que el villano te atrape intentando escapar de su laboratorio.
            </p>
                <Button block className='mr-3' variant='info' onClick={Bienvenida}>Instrucciones</Button>
            </div>

        </section>
    );
}

export default Instrucciones