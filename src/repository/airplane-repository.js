const {Airplane}=require('../models/index')

class AirplaneRepository{
    async getAirplane(id){
        try{
          const airplane=await Airplane.findByPk(id);
          return airplane;
        }catch(error){
          console.log("there is some error in airplane repository 1");
          throw {error};
        }
    }
}
module.exports=AirplaneRepository;