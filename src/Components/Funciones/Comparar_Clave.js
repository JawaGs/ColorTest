module.exports = {
   compararClave( clave_laboratorio, clave_usuario ){ 
       let aciertos = ''
       let aciertosExactos = ''
       let resultado = ''
       let remover = []
       let array_laboratorio = clave_laboratorio.toUpperCase().split('')
       let array_usuario = clave_usuario.toUpperCase().split('')
       if (clave_laboratorio.toUpperCase() == clave_usuario.toUpperCase()){
            console.log( "XXXX Has Ganado!!" )
            return ( "XXXX Has Ganado!!" )
       };

       for (let i = 0; i < array_usuario.length; i++) {
           if( array_usuario[i] === array_laboratorio[i] ){
               aciertosExactos += 'X'
               remover.push( array_laboratorio[i] )
           }
       }

      
       
       remover.forEach( e =>{ 
           
           let index = array_usuario.indexOf( e )
           array_usuario.splice( index,1 ) 
        } )
               
       array_usuario.forEach( e => {
        
        let aux = array_laboratorio.indexOf(e)
        
        if(aux != -1){ 
            aciertos += '*'
            array_laboratorio.splice( aux,1 )
         }
    });
       resultado = aciertosExactos + aciertos

       return resultado
       
     }
     
 }
