const connection = require('../infrastructure/database/connection')
const fileUploads = require('../infrastructure/files/fileUploads')
const repositories = require('../repositories/pets')


class Pets {
    add(pets, res) {
        
        return new Promise ((resolve, reject) => fileUploads(pets.petImage, pets.petName, (newPath) => {
            const newPet = {petName: pets.petName, petImage: newPath}

            return repositories.add(newPet)
                .then(results => {

                    resolve({...results})
                    return{...results}
                })
                .catch(error => {reject(error)})
            // connection.query(query, newPet, error => {
            //     if(error) {
            //         console.log(error)
            //         res.status(400).json(error)
            //     } else {
            //         res.status(200).json(newPet)
            //     }
            // })
        }))

    }
}

module.exports = new Pets()