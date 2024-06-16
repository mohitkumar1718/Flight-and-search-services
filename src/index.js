const express=require('express');
const bodyParser=require('body-parser')
require('dotenv').config()
const {PORT}=require('./config/serverConfig');
const apiRoutes=require('./routes/index');
const {Airport,City}=require('./models/index')
const db=require('./models/index')
const sequelize=require('sequelize')


const setupAndStartServer=async()=>{

    const app =express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server started ad Port ${PORT}`);
        if(process.env.DB_SYNC){    
            db.sequelize.sync({alter:true});
        }
        // const city= await City.findOne({
        //     where:{
        //         id:12
        //     }
        // })
        // console.log(await city.getAirports());
        
       
         
    })
}
setupAndStartServer();