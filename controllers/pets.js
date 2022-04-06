const Pets = require('../models/pets')

module.exports = app => {
    app.post('/pets', (req, res) => {
        const pets = req.body

        Pets.add(pets, res)
        .then(newPet => 
            res.status(200).json(newPet)
        )
        .catch(errors => res.status(400).json(errors))
    })
}