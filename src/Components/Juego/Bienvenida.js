import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Bienvenida = (props) =>{
    return (
        <Modal 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bienvenido!!
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='h5'>
                    Fuiste atrapado por un cientifico loco que quiere experimentar contigo, afortunadamente para ti la anestesia no ha funcionado bien y te has despertado antes de tiempo, tu unica esperanza de salir de alli es descifrar el codigo de seguridad de la puerta del laboratorio antes de que tu captor note que te has despertado y se encargue de ti...
                </p>
            </Modal.Body>
            <Modal.Footer>
                <span className='mr-auto'>Buena Suerte!!</span>
                <Button variant='outline-danger' onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Bienvenida