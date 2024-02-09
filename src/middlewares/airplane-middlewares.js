const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");

function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.message = "Something went wrong while creating an airplane";
        ErrorResponse.error = {explanation: "model number not found in the incomint request"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest
}