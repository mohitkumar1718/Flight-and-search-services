const express=require('express');
require('dotenv').config()
const {PORT}=require('./config/serverConfig');

const setupAndStartServer=async()=>{

    const app =express();
    app.listen(PORT,()=>{
        console.log(`Server started ad Port ${PORT}`);
        
    })
}
setupAndStartServer();