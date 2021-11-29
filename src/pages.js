const Database = require('./database/db')
const saveRoom = require('./controllers/saveRoom')
module.exports = {

    async renderIndex(req, res) {
    
        try {       
            console.log('Teste render index') 
            return res.render("index")
        }
        catch (error) {
            console.log(error);
        }
    },

    async Teste(req, res) {
    
        try {       
            console.log('Teste render index') 
            try {
                const db = await Database;
                // const room = await db.all("DELETE FROM room")

                const room = await db.all("SELECT * FROM room")
                console.log(room)
            return res.send(' Olá. ');
                } catch (error) {
                    console.log(error)
                    return res.send(' Erro no banco de dados!');
                }
        
        }
        catch (error) {
            console.log(error);
        }
    },

    async createPass(req, res) {
    
    try {       
        console.log('Teste render create-pass') 
        return res.render("create-pass")
    }
    catch (error) {
        console.log(error);
    }
},

async renderRoom(req, res) {
    
    try {       
        console.log('Teste render room') 
        return res.render("room")
    }
    catch (error) {
        console.log(error);
    }
},

async createPass(req, res) {

try {       
    console.log('Teste render create-pass') 
    return res.render("create-pass")
}
catch (error) {
    console.log(error);
}
},

async createRoom(req, res) {
    let roomId;
    console.log(' Teste depois de declarar roomId.')
    for (var i = 0; i < 6; i++) {
        i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :

        roomId += Math.floor(Math.random() * 10).toString()  
    }
    console.log(' Teste depois de setar roomId')
    console.log(roomId)

    // const roomExistIds = await db.all("SELECT id FROM room")

    // roomExistIds.some(roomExistId => roomExistId === roomId)

    const Room = {
        id: roomId,
        password: req.body.password      
    };

    try {
         const db = await Database;
         await saveRoom(db, { Room });
         console.log(' Try to save room')
         
         return res.redirect(`/room/${roomId}`);
    } catch (error) {
         console.log(error);
    }
},

async questionController(req, res) {
    // let roomId;
    // console.log(' Teste depois de declarar roomId.')
    // for (var i = 0; i < 6; i++) {
    //     i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :

    //     roomId += Math.floor(Math.random() * 10).toString()  
    // }
    // console.log(' Teste depois de setar roomId')
    // console.log(roomId)
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    try {
         console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)
         return res.redirect(`/room/${roomId}/${questionId}/${action}`);
    } catch (error) {
         console.log(error);
    }
    // try {       
    //     console.log('Teste') 
    //     return res.render("create-pass")
    // }
    // catch (error) {
    //     console.log(error);
    // }
}
}
