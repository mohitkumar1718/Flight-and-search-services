const {CityService} =require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const cityService=new CityService();

const create=async(req,res)=>{
    try{
     const city=await cityService.createCity(req.body);
      return res.status(SuccessCodes.CREATED).json({
        data: city,
        status:true,
        message:"Successfully created a city",
        err:{}
      });
    }catch(error){
        console.log(error)
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            status:false,
            message:"Not able to create a city",
            err:error
          })

    }

}
const destroy=async(req,res)=>{
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
          data: response,
          status:true,
          message:"Successfully deleted  a city",
          err:{}
        });
    
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status:false,
            message:"Not able to delete a city",
            err:error,
            
          })
        
    }

}

const update=async(req,res)=>{
    try{
        const response=await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
          data: response,
          status:true,
          message:"Successfully updated the city",
          err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status:false,
            message:"Not able to update a city",
            err:error
          })

    }

}
const get=async(req,res)=>{
    try{
        const response=await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
          data: response,
          status:true,
          message:"Successfully get the city",
          err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            status:false,
            message:"Not able to get a city",
            err:error
          })

    }

}

const getAll=async(req,res)=>{
  try{
      const response=await cityService.getAllCity(req.query);
      return res.status(SuccessCodes.OK).json({
        data: response,
        status:true,
        message:"Successfully get the all cities",
        err:{}
      });
  }catch(error){
      console.log(error);
      return res.status(500).json({
          data: {},
          status:false,
          message:"Not able to get all cities",
          err:error
        })

  }

}

module.exports={
    create,
    update,
    destroy,
    get,
    getAll
}