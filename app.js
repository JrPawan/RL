const express = require('express')
const path = require('path')


const app = express()
const publicPath = path.join(__dirname,'public')
app.set('view engine','ejs')
app.get('/profile', (req, res)=>{
    
        const users={
            name: 'Pawan Khanal',
            email: 'pawankhanal6@gmail.com',
            city: 'kathmandu'
        }
        res.render('profile',{users})
    });
app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('/ab', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/help.html`)
})


app.listen(3000)