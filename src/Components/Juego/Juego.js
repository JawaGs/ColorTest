import React from 'react'
import Bienvenida from './Bienvenida';
import Instrucciones from './Instrucciones';
import Botones from './Botones';


export default class Juego extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }

    onHide = () => {
        this.setState({ show: false })
    }

    render() {
    
        return (
            <div >
                <Bienvenida onHide={this.onHide} show={this.state.show} />
                <section className='row'>
                    <Instrucciones />
                    <Botones />
                </section>

            </div>
        )
    }
}