const express = require('express')

const path = require('path')
const app= express();

const routes = require('./routes');

app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333,()=>{
    console.log('porta 3333')
})