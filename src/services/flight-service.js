const {FlightRepository, AirPlaneRepository }=require('../repository/index')
const {compareDateTime}= require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository= new AirPlaneRepository();
        this.flightRepository= new FlightRepository()
    }
    async createFlight(data){
      try{
        if(!compareDateTime(data.arrivalTime,data.departureTime)){
          throw{error:'Arrival time cannot be less then departure time'};
        }
        const airplane=await this.airplaneRepository.getAirplane(data.airPlainId);
        const flight=await this.flightRepository.createFlight({
            ...data, totalSeats:airplane.capacity
        })
        return flight; 
      }catch(error){
        console.log("there is some error in flight service")
        throw{error};
      }
    }
    async getAllFlightData(data){
      try{
        const flight=await this.flightRepository.getAllFlight(data)
        return flight; 
      }catch(error){
        console.log("there is some error in get all flight service")
        throw{error};
      }
    }
    }
    module.exports=FlightService;