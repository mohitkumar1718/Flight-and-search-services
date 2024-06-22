const db=require('../models/index')
const {Op}=require('sequelize')
class FightRepository{
  #createFilter(data){
    let filter={}
    if(data.arrivalAirportId){
      filter.arrivalAirportId=data.arrivalAirportId
    }
    if(data.departureAirportId){
      filter.departureAirportId=data.departureAirportId
    }
    if(data.minPrice){
       Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
    }
    if(data.maxPrice){
      Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
   }
   if(data.minPrice && data.maxPrice){
    Object.assign(filter,{price:{[Op.between]:[data.minPrice, data.maxPrice]}});
 }
   return filter;
  }

    async createFlight(data){
      try{
        const flight=await db.Flight.create(data);
        return flight;
      }catch(error){
        console.log("something went wrong in flight repository layer");
        throw{error}
      }
    }
    async getAllFlight(filter){
      try{
        const filterObject=this.#createFilter(filter)
        const flight=await db.Flight.findAll({
          where:filterObject
          
        });
        return flight;
      }catch(error){
        console.log("something went wrong in get flight repository layer");
        throw{error}
      }
    }
    async getFlight(flightId){
      try{
        const flight=await db.Flight.findAll(flightId);
        return flight;
      }catch(error){
        console.log("something went wrong in get All flight repository layer");
        throw{error}
      }
    }
}
module.exports=FightRepository;