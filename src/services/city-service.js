
const {CityRepository}= require('../repository/index');

class cityService{
      constructor(){
        this.CityRepository =new CityRepository();
      }
      async createCity(data){
        try{
             const city=await this.CityRepository.createCity(data);
             return city;
        }catch(error){
           console.log("error at city repository")
           throw{error}
        }
      }
      async deleteCity(cityId){
        try{
            const city=await this.CityRepository.deleteCity(cityId);
            return true;
        }catch(error){
            console.log("error at city repository")
            throw{error}
         }
      }
      async updateCity(cityId, data){
        try{
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
        }catch(error){
            console.log("error at city repository")
            throw{error}
         }
      }
      async getCity(cityId){
        try{
            const city=await this.CityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("error at city repository")
            throw{error}
         }
      }
}

module.exports=cityService;