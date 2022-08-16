;const express = require("express")
const http =require("http")
const app = express()


app.use(express.json())

const users = [{id:1,  name:'dibash'}, { id:2 , name:"Pawan"}]
 
/* 
GET all data = READ
*/
app.get("/" , (req, res)=> {
    return res.json(users)
})

/*
POST create data = CREATE
*/
app.post("/create", (req, res) =>{
    const newUser = req.body
    users.push(newUser)
    return res.json(users)
})

/*
PUT update data = UPDATE
*/
app.put("/:id" , (req, res) => {
    const name = req.body.name
    const userId = Number(req.params.id)
    console.log("users", users)
    
    const foundUser = users.find((usr) => usr.id === userId)
    const usrIndex = users.findIndex((usr) => usr.id === userId)
    if (foundUser){
        users[usrIndex].name = name
        return res.json(users)
    } else {
        return res.json("User not found")
    }
})


/* 
DELETE - Delete the data by id  = DELETE
*/
app.delete("/:id" , (req, res) => {
    const userId = Number(req.params.id)
    const undeletedUsers = users.filter((usr) => usr.id !== userId )
    return res.json(undeletedUsers)
})
 
const httpServer = http.createServer(app)
httpServer.listen(4000, function(){
    console.log("Server is running at port 4000")
})
