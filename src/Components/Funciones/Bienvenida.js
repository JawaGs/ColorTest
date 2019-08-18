import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Bienvenida = () => {
    MySwal.mixin(
        {

            confirmButtonText: 'Siguiente',
            showCancelButton: true,
            cancelButtonText: 'Salir',
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Bienvenido',
                text: 'Fuiste atrapado por un cientifico loco que quiere experimentar contigo, afortunadamente para ti la anestesia no ha funcionado bien y te has despertado antes de tiempo, tu unica esperanza de salir de alli es descifrar el codigo de seguridad de la puerta del laboratorio antes de que tu captor note que te has despertado y se encargue de ti...'
            },
            { text: 'El sistema genera un código de seguridad que consiste en una secuencia de cuatro colores.Al introducir la secuencia de cuatro colores, el sistema debe responder con una "X" todos los aciertos que estén en la posición correcta y con un "*" todos los aciertos que NO estén en posición correcta.' },
            { text: 'En la salida, primero se listan todas las "X" y luego todos los "*", sin importar el orden en el que se hayan detectado. En el código de seguridad se pueden repetir colores.' }
        ])
}

export default Bienvenida