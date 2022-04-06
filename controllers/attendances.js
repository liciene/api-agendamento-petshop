const Attendances = require('../models/attendances')

module.exports = app => {
    app.get('/attendances', (req, res) => {
        Attendances.list()
        .then(results => res.json(results))
        .catch(errors => res.status(400).json(errors))
        })

    app.get('/attendances/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Attendances.searchById(id)
        .then(results => res.status(200).json(results))
        .catch(errors => res.status(400).json(errors))
    })

    app.post('/attendances', (req, res) => {
        const attendances = req.body;

        Attendances.add(attendances)
            .then(registeredAttendances => 
                res.status(201).json(registeredAttendances)
            )
            .catch(error => res.status(400).json(error))
    })

    app.patch('/attendances/:id', (req, res) => {
        const id= parseInt(req.params.id)
        const values = req.body;

        Attendances.changeData(id, values, res)
            .then(results => res.status(200).json(results))
            .catch(errors => res.status(400).json(errors))
    })

    app.delete('/attendances/:id', (req, res) => {
        const id= parseInt(req.params.id)

        Attendances.deleteData(id)
        .then(results => res.status(200).json(results))
        .catch(errors => res.status(400).json(errors))

    })
}