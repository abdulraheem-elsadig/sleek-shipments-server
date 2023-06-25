const express = require("express");
const { signup, login } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);

module.exports = authRouter;
