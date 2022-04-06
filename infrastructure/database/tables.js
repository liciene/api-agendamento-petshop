class Tables {
    init(connection) {
        this.connection = connection

        this.createAttendances()
        this.createPets()
    }

    createAttendances() {
        const sql = 'CREATE TABLE IF NOT EXISTS Attendances (id int NOT NULL AUTO_INCREMENT, userClient varchar(11) NOT NULL, pet varchar(20), serviceName varchar(20) NOT NULL, serviceDate datetime NOT NULL, creationDate datetime NOT NULL, statusName varchar(20) NOT NULL, observations text, PRIMARY KEY(id))'

        
        this.connection.query(sql, (error) => {
            if(error) {
                console.log(error)
            } else {
                console.log('Tabela de atendimentos criada com sucesso')
            }
        })
    }

    createPets() {
        const query = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, petName varchar(50), petImage varchar(200), PRIMARY KEY (id))'

        this.connection.query(query, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Tabela pets criada')
            }

        })
    }
}

module.exports = new Tables