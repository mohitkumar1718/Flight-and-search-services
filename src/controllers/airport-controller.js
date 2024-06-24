const  AirportService  = require('../services/airport-service');
const {  SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true
        }) 
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

const getAll=async (req, res) => {
    try {
        const response = await airportService.getAll();
        return res.status(SuccessCodes.OK).json({
            message: 'Successfully get the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot  get  airport'
        })
    }
}

module.exports = {
    create,
    getAll
}