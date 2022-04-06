const query = require('../infrastructure/database/queries')

class Attendances {
    add(attendances) {
        const sql = 'INSERT INTO Attendances SET ?'
        return query(sql, attendances)
    }

    list() {
        const sql = 'SELECT * FROM Attendances'
        return query(sql)
    }
    searchById(id) {
        const sql = `SELECT * FROM Attendances WHERE id=${id}`
        return query(sql, id)
    }
    changeData(id, values) {
        const sql = `UPDATE Attendances SET ? WHERE id=${id}`
        return query(sql, values)
    }
    deleteData(id) {
        const sql = `DELETE FROM Attendances WHERE id=${id}`
        return query(sql, id)
    }
}

module.exports = new Attendances