const data = require("../database/config.js")

module.exports = {
    async create(req, res) {
        console.log('aqui corno')

        const db = await data;
        
        const pass = req.body.password
        let roomId;

        for (var i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :

            roomId += Math.floor(Math.random() * 10).toString()  
        }
        console.log(parseInt(roomId))
        console.log(pass)   

        await db.run(`INSERT INTO room (
            id,
            password
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)

        await db.close();

        res.redirect(`/room/${roomId}`)
    }
}