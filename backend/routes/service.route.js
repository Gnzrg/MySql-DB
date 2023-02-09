const express = require("express");

const router = express.Router();
const service = require("../controllers/service.controller.js");

router.get("/service", service.getAll);

module.exports = router;
