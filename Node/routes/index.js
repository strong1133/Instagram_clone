const express = require("express");
const router = express.Router();


const viewController = require("../controllers/viewController");

// view Controller
router.get('/login', viewController.login);
router.get('/signup', viewController.signup);

module.exports = router;