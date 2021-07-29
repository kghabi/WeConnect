const express = require('express')
const connectDB = require('./config/db');
// inial app with express
const app=express();

// Connect DataBase
connectDB();

app.get('/', (req, res)=> res.send('API Running'));


const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));