const sqlite3 = require('sqlite3')
// Só precisa de uma função no sqlite, a função open, dessa forma ele só vai pegar o open e colocar na variável open
const { open } = require('sqlite')

module.exports = () => {
    open({
        filename: './src/database/database.sqlite',
        driver: sqlite3.Database,
    });
}