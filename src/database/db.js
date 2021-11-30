const Database = require('sqlite-async');
// Só precisa de uma função no sqlite, a função open, dessa forma ele só vai pegar o open e colocar na variável open

function execute(db) {
        return db.exec(`
        CREATE TABLE IF NOT EXISTS room (
            id INTEGER PRIMARY KEY,
            password TEXT
            );
            
       CREATE TABLE IF NOT EXISTS question (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
            );
        `);
}

//db
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)



// const Database = require('./config')

// const initDb = {
//     async init() {
//         const db = await Database()

//         await db.exec(`
//             CREATE TABLE room (
//                 id INTEGER PRIMARY KEY,
//                 password TEXT
//             )
//         `);
//         await db.exec(`
//             CREATE TABLE question (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT,
//                 title TEXT,
//                 read INT 
//             )
//         `);

//         await db.close()

//     }
// }

// initDb.init();