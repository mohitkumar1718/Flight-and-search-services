const {FlightService}=require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const flightService=new FlightService();

const create=async (req,res)=>{
      try{
        const flight= await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success: true,
            err:{},
            message:"successfully created a flight"
        })

      }catch(error){
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message:"Not able to create a flight",
            err:error
          })
        }
}
const getAll=async(req,res)=>{
  try{
    console.log(req.query)
    const response= await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
        data:response,
        success: true,
        err:{},
        message:"successfully get flights"
    })
  }catch(error){
    console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message:"Not able to get flights",
            err:error
          })
        }
      }

module.exports={
    create,
    getAll
}