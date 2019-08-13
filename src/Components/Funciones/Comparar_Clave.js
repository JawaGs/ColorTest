module.exports = {
    compararClave(clave_laboratorio, clave_usuario) {
        let aciertos = ''
        let aciertosExactos = ''
        let i = 0
        let indices = []
        let nueva_clave_lab = ''
        let nueva_clave_user = ''

        sonIguales = (a, b) => {
            return a.toUpperCase() === b.toUpperCase()
        }

        contarAciertos = () => {
            indices.push(i)
        }

        

        compararAciertos = () => {
            let arr1 = nueva_clave_lab.split('')
            let arr2 = nueva_clave_user.toUpperCase().split('')
            let intersection = arr1.filter(function(e) {
                return arr2.indexOf(e) !== -1
            })
            aciertos += '*'.repeat(intersection.length)
        }

        while (i < 4) {
            sonIguales(clave_laboratorio[i], clave_usuario[i]) ? (aciertosExactos += 'X') : contarAciertos()
            i++
        }

        indices.forEach(e => {
            nueva_clave_lab += clave_laboratorio[e]
            nueva_clave_user += clave_usuario[e]
        })

        indices.length > 1 ? compararAciertos() : ''

        let resultado = clave_laboratorio.toUpperCase() == clave_usuario.toUpperCase() ? "XXXX Has Ganado" : (aciertosExactos + aciertos + " Sigue Intentando")

        return resultado
    }

}
