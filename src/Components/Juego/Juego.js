import React from 'react'
import Instrucciones from './Instrucciones';
import Botones from './Botones';


 const Juego = () =>{
        return (
            <div >
                <section className='row'>
                    <Instrucciones />
                    <Botones />
                </section>
            </div>
        )
    }

export default Juego