const axios = require('axios').default
const query = require('../infrastructure/database/queries')

class Client {
    getClient(cpf) {
        return axios.get(`http://localhost:8082/${cpf}`)
        
    }
}

module.exports = new Client