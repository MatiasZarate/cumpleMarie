const homeController = require('./../controllers/homeController');
const express = require("express");
const router = express.Router();

router.get("/", homeController.index)
router.get("/inicio", homeController.inicio)
module.exports = router;