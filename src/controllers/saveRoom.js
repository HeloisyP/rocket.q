module.exports = async function(db, { Room }) {
    //Inserir dados na table de expenses
    const insertRoom = await db.run(`
        INSERT INTO room (
            id,
            password
        ) VALUES (
                "${Room.id}",
                "${Room.password}"
            );
        `);
};