const Database = require('./database/db')
const saveRoom = require('./controllers/saveRoom')
const saveQuestion = require('./controllers/saveQuestion')
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
        // let min = Math.ceil(100000);
        // let max = Math.floor(999999);
        // let ret = Math.floor(Math.random() * (max - min)) + min;
        // console.log(ret);

        // console.log('Teste render index') 
        
        const db = await Database;
        // //const rooms = await db.all('DELETE FROM question where id="4"')
        // const room = await db.all("SELECT * FROM room")
        // console.log(room)
        // const question = await db.all("SELECT * FROM question")
        // console.log(question)

        // const question = await db.all('INSERT INTO question (title,read,room) VALUES (" O que é um scrum master?", 1, 441899)');
        // console.log(question)
        
        return res.send(' Olá.');

    } catch (error) {
        console.log(error)
        return res.send(' Erro no banco de dados!');
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

enterRoom(req, res){
    console.log(' Iniciando tentativa.')
    const roomId = req.body.roomid;
    console.log(roomId)

    try {
        return res.redirect(`/room/${roomId}`);
    } catch (error) {
        console.log(' Erro em index.hbs.')
    }
    
},

async renderRoom(req, res) {
    const roomId = req.params.room;
        
    console.log(roomId)

    try {       
        const db = await Database;
        const questionsNotRead = await db.all(`SELECT * FROM question WHERE room = ${roomId} and read =0`)
        const questionsRead = await db.all(`SELECT * FROM question WHERE room = ${roomId} and read=1`)
        console.log(questionsRead)
        console.log(questionsNotRead)
        let hasQuestion = true;

        if(questionsRead.length == 0 && questionsNotRead.length == 0) {
            hasQuestion = false;
        } 
        return res.render("room", {roomId: roomId, questionsNotRead: questionsNotRead, questionsRead: questionsRead, hasQuestion: hasQuestion})
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
    let roomExist = true;

    while(roomExist) {
    console.log(' Função para testar se senha existe.')

    // Os valores 100000 e 999999 não vão ser utilizados.
    let min = Math.ceil(100000);
    let max = Math.floor(999999);
    roomId = Math.floor(Math.random() * (max - min)) + min;
    console.log(' Teste depois de setar roomId')
    console.log(roomId)
    // Validação se já existe a senha inserida.
    //<SenhaExiste?>
    const db = await Database;
    const roomExistIds = await db.all("SELECT id FROM room")

    roomExist = roomExistIds.some(roomExistId => roomExistId === roomId)
    console.log(roomExist)

        if(!roomExist) {
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
        }
    }
    // </SenhaExiste>
},

async questionController(req, res) {
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;
    //let correctPass = true;

    const db = await Database;
    const getRoomId = await db.get(`SELECT * FROM room WHERE id = ${roomId}`);
    console.log(getRoomId)
    console.log(` Antes de colocar como lido room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)

    try {
        if(password == getRoomId.password){
            if(action == "check"){
                await db.run(`UPDATE question SET read = 1 WHERE id=${questionId}`);
                console.log(' Depois de colocar como lido.')

            }
            else if(action == "delete") {
                await db.run(`DELETE from question WHERE id=${questionId}`);
                console.log(' Depois de colocar deletar.')
            } 
            return res.redirect(`/room/${roomId}`)
            //return res.render(`/room/${roomId}`, {correctPass: correctPass});
        } else {
            //return res.send(' Errou a senha.');
            // correctPass=false;
            // return res.render(`/room/${roomId}`,{correctPass: correctPass})
            // Ver uma resposta ao usuário decente. Colocar para redirecionar para a rota room/${roomId}/wrongPass caso dê errado e pegar esse valor pelo req.params e colocar e tirar o display: none e colocar block em uma div na modal informando que a senha está errada.
            return res.render("passIncorrect", {roomId: roomId})
        }
        
    } catch (error) {
         console.log(error);
    }
},

async createQuestion(req, res) {
    // const roomId = req.params.room;
    // const questionId = req.params.question;
    // const action = req.params.action;
    // const password = req.body.password;
    const question = req.body.question;
    const roomId = req.params.room;
    console.log('Mostrar se está pegando a room para a question.')
    console.log(roomId)

    try {
        const Question = {
            title: question,
            read: 0,
            room: roomId    
        };
        console.log(' Mostrar depois de criar questão.')
        console.log(question)
        console.log(roomId)
        const db = await Database;
        await saveQuestion(db, { Question });
        console.log(' Try to save room')
                
        return res.redirect(`/room/${roomId}`);

        //console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)
        //return res.redirect(`/room/${roomId}/${questionId}/${action}`);
    } catch (error) {
         console.log(error);
    }
}


}
