const axios = require('axios').default
const {format, isAfter, parse} = require('date-fns')
const connection = require('../infrastructure/database/connection')
const repositories = require('../repositories/attendances')
const clientRepositories = require('../repositories/client')

class Attendances {
    constructor () {

        this.dateIsValid = (serviceDateParsed, date) => isAfter(serviceDateParsed, date)
        this.clientisValid = (userClient) => userClient >= 11

        this.validations = (dateIsValid, clientisValid) => [
            {
                name: 'date',
                valid: dateIsValid,
                message: 'Data deve ser maior ou igual a data atual'
            },
            {
                name: 'client',
                valid: clientisValid,
                message: 'Cliente deve ter pelo menos 11 caracteres'
            }
        ]
    }
    add(attendances) {
        const date = new Date()
        const creationDate = format(date, 'yyyy-MM-dd HH:mm:ss')
        const serviceDateParsed = parse(attendances.serviceDate, 'dd/MM/yy', new Date())
        const serviceDate = format(serviceDateParsed, 'yyyy-MM-dd HH:mm:ss')

        const dateIsValid = this.dateIsValid(serviceDateParsed, date)
        const clientisValid = this.clientisValid(attendances.userClient.length)

        const errors = this.validations(dateIsValid, clientisValid).filter(field => !field.valid)
        const thereAreErros = errors.length

        if(thereAreErros) {
            return new Promise((resolve, reject) => reject(errors))
        } else {

            const attendanceDate = {... attendances, creationDate, serviceDate}

            return repositories.add(attendanceDate)
                .then(results => {
                    const id = results.insertId
                    return {...attendances, id}
                })
        }    
    }

    list() {
        return repositories.list()
    }

    searchById(id) {

    return repositories.searchById(id) 
        .then( async (results) => {
            const attendance = results[0]
            const cpf = attendance.userClient
                const {data} = await clientRepositories.getClient(cpf)
                console.log(data)
                attendance.userClient = data

                return attendance
        })
        .catch(error => {throw new Error(error)})
    }

    changeData(id, values) {
        const serviceDate = parse(values.serviceDate, 'dd/MM/yy', new Date())

        return repositories.changeData(id, {serviceDate, ...values})
            .then(results => {
                return {...values, serviceDate, id}
            })
    }
    
    deleteData(id) {
        
        return repositories.deleteData(id)
        .then(results => {
            return {id}
        })

    }
}

module.exports = new Attendances