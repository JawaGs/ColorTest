import React, { useState } from 'react'
import { Button, FormControl, ButtonGroup, Card } from 'react-bootstrap'
import Botones_de_Funcion from './Botones_de_Funciones'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const clave = require('../Funciones/Generar_Clave')
const comparar = require('../Funciones/Comparar_Clave')

const Botones = () => {
    const [clave_usuario, setClaveUsuario] = useState('')
    const [clave_laboratorio, setClaveLaboratorio] = useState('')
    const [count, setCount] = useState(10)
    const [resultado, setResultado] = useState('')
    const [show, setShow] = useState(false)

    function handleClick(e) {
        const valor = e.target.value
        clave_usuario.length < 4?setClaveUsuario(clave_usuario + valor): MySwal.fire(
            {
                type: 'error',
                confirmButtonColor: '#009670',
                title: 'ERROR',
                text: 'La clave solo puede contener 4 digitos.'
            }
        )
    }

    function generarClave() {
        setClaveLaboratorio(clave.generarClave())
        setCount(10)
        MySwal.fire(
            {
                type: 'success',
                confirmButtonColor: '#009670',
                title: 'EXITO',
                text: 'CLAVE GENERADA SATISFACTORIAMENTE.'
            }
        )
        
    }

    function volverAtras() {
        clave_usuario === '' ? MySwal.fire(
            {
                type: 'error',
                confirmButtonColor: '#009670',
                title: 'ERROR',
                text: 'Ingrese al menos un caracter...'
            }
        ) : (

                setClaveUsuario(clave_usuario.slice(0, -1)),
                setShow(true),
                console.log(show)

            )
    }

    function compararClave() {
        clave_laboratorio === '' ? MySwal.fire(
            {
                type: 'error',
                confirmButtonColor: '#009670',
                title: 'ERROR',
                text: 'GENERE UNA CLAVE PARA EMPEZAR EL JUEGO.'
            }
        )
            : (
                setResultado(comparar.compararClave(clave_laboratorio, clave_usuario)),
                setCount(count - 1),
                count === 1 ? (
                    setShow(true),
                    setClaveLaboratorio(''),
                    setClaveUsuario(''),
                    setResultado(''),
                    setCount(10),
                    MySwal.fire(
                        {
                            title: 'GAME OVER',
                            imageUrl: 'https://www.pequeocio.com/wp-content/uploads/2015/02/melquiades.jpg',
                            imageWidth:'80%',
                            text:'Parece que alguien esta tratando de escapar. Es hora de que me encargue de ti...',
                            confirmButtonColor:'#e12e1c'
                        }
                    )
                ) : null
            )
    }



    
    return (
        <div className='mx-4 col-md-6' >

            <Card className='mt-5'>
                <Card.Header>
                    <FormControl id='input' readOnly size='lg' type='text' value={clave_usuario} placeholder='Introduzca su clave' className=' m-2' />
                    <FormControl readOnly defaultValue={resultado} className='m-2' />
                </Card.Header>
                <ButtonGroup aria-label="Letras" className='m-2' >
                    <Button onKeyDown={handleClick} onClick={handleClick} className='m-2 py-3' value='R' variant='danger'>R</Button>
                    <Button onClick={handleClick} className='m-2' value='A' variant='info'>A</Button>
                    <Button onClick={handleClick} className='m-2' value='M' variant='warning'>M</Button>
                </ButtonGroup>
                <ButtonGroup className='m-2' >
                    <Button onClick={handleClick} className='m-2 py-3' value='V' variant='success'>V</Button>
                    <Button onClick={handleClick} className='naranja m-2' value='N'>N</Button>
                    <Button onClick={handleClick} className='violeta m-2' value='I'>I</Button>
                </ButtonGroup>

                <Botones_de_Funcion borrarClave={() => setClaveUsuario('')} generarClave={generarClave} compararClave={compararClave} volverAtras={volverAtras} />


                <Card.Footer>
                    <div>Opurtinidades restantes:{count}</div>
                </Card.Footer>
            </Card>

        </div>
    )

}

export default Botones