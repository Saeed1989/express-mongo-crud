const express = require("express");
const dataRoutes = require("./data-controller");

let router = express.Router();

router.use("/data", dataRoutes);

module.exports = router;
