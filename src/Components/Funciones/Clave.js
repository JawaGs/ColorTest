module.exports  ={
  
generarClave()  {
  numeroAleatorio = (min, max) => {
    return (Math.round(Math.random() * (max - min) + min));
  }
  let digitos = []
  let clave = ''
  for (let i = 0; i < 4; i++) {
    let elemento = numeroAleatorio(1, 6)
    switch (elemento) {
      case 2:
        elemento = 'A'
        break;
      case 3:
        elemento = 'M'
        break;
      case 4:
        elemento = 'V'
        break;
      case 5:
        elemento = 'N'
        break;
      case 6:
        elemento = 'I'
        break;
      default:
        elemento = 'R'
        break;
    }
    digitos.push(elemento)
  }
  clave = digitos.join( '' )
  return clave
}

}