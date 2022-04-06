const { query } = require('express')
const connection = require('./connection')

 const runQuery = (query, parameters = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (errors, results, fields) => {
            if (errors) {
                reject(errors)
            } else {
                resolve(results)
            }
         })
    })
 }

 module.exports = runQuery