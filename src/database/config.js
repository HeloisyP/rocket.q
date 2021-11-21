const Database = require('sqlite-async');
// Só precisa de uma função no sqlite, a função open, dessa forma ele só vai pegar o open e colocar na variável open

function execute(db) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS room (
            id INTEGER PRIMARY KEY,
            password TEXT
        )
    `);
    
    return db.exec(`
        CREATE TABLE IF NOT EXISTS question (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT 
        )
    `);
}

module.exports = Database.open( './database.sqlite').then(execute)

