const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`
            CREATE TABLE room (
                id INTEGER PRIMARY KEY,
                password TEXT
            )
        `);
        await db.exec(`
            CREATE TABLE question (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                read INT 
            )
        `);

        await db.close()

    }
}

initDb.init();