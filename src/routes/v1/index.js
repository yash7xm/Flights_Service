const express = require("express");

const router = express.Router();

const { InfoController } = require("../../controllers");

const airplnaeRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

router.use("/airplanes", airplnaeRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);

router.get("/info", InfoController.info);

module.exports = router;
