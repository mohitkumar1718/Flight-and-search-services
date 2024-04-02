const express=require('express');
const bodyParser=require('body-parser')
const {City}=require('./models/index');
require('dotenv').config()
const {PORT}=require('./config/serverConfig');


const setupAndStartServer=async()=>{


    const app =express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
        console.log(`Server started ad Port ${PORT}`);
        
       
        
    })
}
setupAndStartServer();