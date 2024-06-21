const db=require('../models/index')
class FightRepository{

    async createFlight(data){
      try{
        const flight=await db.Flight.create(data);
        return flight;
      }catch(error){
        console.log("something went wrong in flight repository layer");
        throw{error}
      }
    }
}
module.exports=FightRepository;