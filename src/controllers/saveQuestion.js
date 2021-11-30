module.exports = async function(db, { Question }) {
    //Inserir dados na table de expenses
    const insertQuestion = await db.run(`
        INSERT INTO question (
            title,
            read,
            room
        ) VALUES (
                "${Question.title}",
                ${Question.read},
                ${Question.room}
            );
        `);
};