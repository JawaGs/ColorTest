import React from 'react'
const clave = require('../Funciones/Clave')
const comparar = require('../Funciones/Comparar_Clave')

export default class Juego extends React.Component {
    constructor() {
        super()
        this.state = {
            clave_laboratorio: '',
            count: 10,
            clave_usuario: '',
            resultado: ''
        }
    }

    generarClave = () => {
        const clave_laboratorio = clave.generarClave()
        this.setState({ clave_laboratorio })
        alert('Su clave a sido generada con exito!')
    }

    handleChange = (e) => {
        const clave_usuario = e.target.value
        this.setState({ clave_usuario })
    }

    compararClave = () => {
       if( this.state.clave_laboratorio === '' ){ 
           alert('GENERE UNA CLAVE PARA EMPEZAR EL JUEGO')
        }else { 
            const [clave_laboratorio, clave_usuario] = [this.state.clave_laboratorio, this.state.clave_usuario];
            const resultado = comparar.compararClave(clave_laboratorio, clave_usuario);
            const count = this.state.count - 1
            this.setState({ resultado, count })
            if (this.state.count === 0) {
                alert('GAME OVER PORFAVOR GENERE UNA CLAVE NUEVA')
                this.setState({
                    clave_laboratorio: '',
                    count: 10,
                    clave_usuario: '',
                    resultado: ''
                })
            }
        }
         }

    render() {
        console.log(this.state)
        return (
            <div>
                <h4>
             El sistema genera un código de seguridad que consiste en una secuencia de cuatro colores. 
                Los colores posibles con su letra asociada son:
                Rojo		R
                Azul		A
                Amarillo	M
                Verde		V
                Naranja	N
                Violeta		I

                Al introducir la secuencia de cuatro colores, el sistema debe responder con una "X" todos los aciertos que estén en la posición correcta y con un "*" todos los aciertos que NO estén en posición correcta. En la salida, primero se listan todas las 'X' y luego todos los '*', sin importar el orden en el que se hayan detectado.

                En el código de seguridad se pueden repetir colores.
                </h4>
                <p>Tines 10 Oportunidades antes de que el villano te atrape por intentar entrar a su laboratorio.</p>
                <input type='text'  name='texto' placeholder='Introduzca su clave' onChange={this.handleChange} />
                <div>
                    <button onClick={this.compararClave} >Comparar Clave</button>
                    <button onClick={this.generarClave} >Generar Clave!!</button>
                </div>
                <div>{this.state.resultado}</div>
                <div>Opurtinidades restantes:{this.state.count}</div>
            </div>
        )
    }
}