const express = require("express");

const router = express.Router();

const { InfoController } = require("../../controllers");

const airplnaeRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");

router.use("/airplanes", airplnaeRoutes);
router.use("/cities", cityRoutes);

router.get("/info", InfoController.info);

module.exports = router;
