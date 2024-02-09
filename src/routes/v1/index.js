const express = require("express");

const router = express.Router();

const { InfoController } = require("../../controllers");

const airplnaeRoutes = require("./airplane-routes");

router.use("/airplanes", airplnaeRoutes);

router.get("/info", InfoController.info);

module.exports = router;
