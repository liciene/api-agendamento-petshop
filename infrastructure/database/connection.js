const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port:  3306,
    user: 'root',
    password: '123456789',
    database: 'agenda-petshop'
})

module.exports = connection