const express = require("express");
const router = express.Router();

const viewController = require("../controllers/viewController");

const userController = require("../controllers/userController")

// view Controller
router.get('/login', viewController.login);
router.get('/signup', viewController.signup);

router.post('/register', userController.register);
router.get('/user', userController.getUser);

module.exports = router;