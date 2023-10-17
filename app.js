const express = require('express');
const fs = require('fs');

const app = express();

app.listen(8000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root : __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root : __dirname});
})

app.get('/devices/fetch-all', (req, res) => {
    fs.readFile('./content/definition.json', 'utf-8', (err, data)=> {
        if(err){
            res.status(500).send('Error');
            return;
        }
        res.json(JSON.parse(data))
    })
});

app.use((req, res)=>{
    res.sendFile('./views/404.html', { root : __dirname})
})
