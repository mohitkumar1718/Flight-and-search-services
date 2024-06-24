const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airPlainId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price

    ){
        res.status(400).json({
            data:{},
            success:false,
            err:"Req body is not proper",
            message:"there is some missing value in req body which is mandatory"

        })
        
    }
    next();
}
module.exports={
    validateCreateFlight
}