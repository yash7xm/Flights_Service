const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /airports
 * req-body {name: 'IGI', cityId: 5, code: 'DEL'}
 */

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * GET : /airports/
 * req-body {}
 */

async function getAirports(req, res) {
  try {
    const airport = await AirportService.getAirports();
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * GET : /airports/:id
 * req-body {}
 */

async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * DELETE : /airports/:id
 * req-body {}
 */

async function destroyAirports(req, res) {
  try {
    const airport = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

/**
 * PATCH : /airports/:id
 * req-body {name: 'IGI', cityId: 5, code: 'DEL'}
 */

async function updateAirport(req, res) {
  const data = {
    name: req.body.name,
    code: req.body.code,
    address: req.body.address,
    cityId: req.body.cityId,
  };
  try {
    const airport = await AirportService.updateAirport(req.params.id, data);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirports,
  updateAirport,
};
