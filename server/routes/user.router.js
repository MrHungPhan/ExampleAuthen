const express = require("express");
const router = express.Router();

const userMiddleware = require("../middlewares/user.middleware");
const userControllers = require("../controllers/user.controllers");

router.post("/register", userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.get("/me", userMiddleware.authencation, userControllers.getUserData);

module.exports = router;
