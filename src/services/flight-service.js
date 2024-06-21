const {FlightRepository, AirPlaneRepository }=require('../repository/index')
const {compareDateTime}= require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository= new AirPlaneRepository();
        this.flightRepository= new FlightRepository()
    }
    async createFlight(data){
      try{
        if(compareDateTime(data.arrivalTime,data.departureTime)){
          throw{error:'Arrival time cannot be grater then departure time'};
        }
        const airplane=await this.airplaneRepository.getAirplane(data.airPlainId);
        console.log(data);
        const flight=await this.flightRepository.createFlight({
            ...data, totalSeats:airplane.capacity
        })
        return flight; 
      }catch(error){
        console.log("there is some error in flight service")
        throw{error};
      }
    }
    async getFlight(){
        //todo
    }
    }
    module.exports=FlightService;