const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/database/connection')
const Tables = require('./infrastructure/database/tables')


connection.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('conectado com sucesso')
        Tables.init(connection)
        const app = customExpress()

app.listen(4000, () => console.log('servidor rodando na porta 4000'))
    }

})

