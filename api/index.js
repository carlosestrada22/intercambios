const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

//corregir esta linea
const Participants = new Array()//JSON.parse(fs.readFileSync(path.join(__dirname, 'participants.txt'))) 

let Relaciones = []

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/api/relacionar', (req, res) => {
    res.send(Relacionar())
})

app.get('/api/resultados', (req, res) => {
    console.log(req.query)
    res.send(Relaciones.find(x => x.Regalante.id === req.query.id).Regalado)
})

app.get('/api/participants', (req, res) => {
    res.send(Participants)
})

app.post('/api/resetear', (req, res) => {
    for (let i = 0; i < Participants.length; i++) {
        Participants.pop()       
    }
    fs.unlinkSync(path.join(__dirname, 'participants.txt'))
    res.sendStatus(200)
})

app.post('/api/inscribe', (req, res) => {
    // fs.appendFileSync(path.join(__dirname, 'dump.txt'), req.body + ',')
    !Participants.find(x => x.id === req.body.user.id) ? Participants.push(req.body.user) : ""
    fs.writeFileSync(path.join(__dirname, 'participants.txt'), JSON.stringify(Participants, null, '\t'))
    res.sendStatus(200)
})


const Relacionar = () => {
    let copy = Array.from(Participants)
    Relaciones = []
    Shuffle(copy)

    for (let i = 0; i < Participants.length; i++) {
        Relaciones.push({
            Regalante: copy[i],
            Regalado: Participants[i]
        })
    }

    Relaciones.find(x => x.Regalado.id === x.Regalante.id ? Relacionar() : "")

    fs.writeFileSync(path.join(__dirname, 'relaciones.txt'), JSON.stringify(Relaciones, null, '\t'))

    return Relaciones
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Shuffle = o => {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

app.listen('5000', console.log('Listening...'))