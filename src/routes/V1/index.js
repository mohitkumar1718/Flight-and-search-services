const express =require('express');
const CityController=require('../../controllers/city-controller')
const FlightController=require('../../controllers/flight-controller')
const AirportController=require('../../controllers/airport-controller')
const router=express();


router.post("/city",CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll)


router.post('/flights',FlightController.create)
router.get('/flights', FlightController.getAll)

router.post('/airports', AirportController.create)
router.get('/airports', AirportController.getAll)





module.exports=router;
