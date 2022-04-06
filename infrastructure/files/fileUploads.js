const fs = require('fs')
const path = require('path')
 
module.exports = (imagePath, fileName, callbackCreatedImage) => {

    const validTypes =  ['jpg','jpeg','png']
    const type =  path.extname(imagePath)
    const typesIsValid = validTypes.indexOf(type.substring(1))
    
    if(typesIsValid === -1) {
        console.log('TIPO INVÁLIDO')
    } else {
        // se der erro, arrumar endereço do diretorio
        const newPath = `./assets/petImages/${fileName}${type}`
    
        fs.createReadStream(imagePath) 
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callbackCreatedImage(newPath))
    }
}

