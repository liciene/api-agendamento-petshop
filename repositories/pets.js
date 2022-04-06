const query = require('../infrastructure/database/queries')

class Pets {
    add(pets) {
        const sql = 'INSERT INTO Pets SET ?'
        return query(sql, pets)
    }
}

module.exports = new Pets