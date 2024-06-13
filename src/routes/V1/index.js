const express =require('express');
const CityController=require('../../controllers/city-controller')
const router=express();

router.post("/city",CityController.create);

module.exports=router;
