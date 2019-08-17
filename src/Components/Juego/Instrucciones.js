import React from 'react'

const texto = ""

function Instrucciones() {
    return (
        <section className=' col-sm-11 col-xs-8 col-md-4 contenedor__instrucciones mx-4 mt-2 '>
            <p className='bg-secondary p-3 mt-1 instrucciones'>
            El sistema genera un código de seguridad que consiste en una secuencia de cuatro colores. <br /><br />
                Los colores posibles con su letra asociada son:<br />
                Rojo ------> R<br />
                Azul ------> A<br />
                Amarillo ------> M<br />
                Verde ------> V<br />
                Naranja	------> N<br />
                Violeta	------>	I<br /><br />

                Al introducir la secuencia de cuatro colores, el sistema debe responder con una "X" todos los aciertos que estén en la posición correcta y con un "*" todos los aciertos que NO estén en posición correcta. En la salida, primero se listan todas las 'X' y luego todos los '*', sin importar el orden en el que se hayan detectado. En el código de seguridad se pueden repetir colores.<br /><br />
                
                Tines 10 Oportunidades antes de que el villano te atrape por intentar entrar a su laboratorio.
            </p>
        </section>
    );
}

export default Instrucciones