const express = require('express');
const route = express.Router();

const mainController = require('../controller/mainController');


route.get("/", mainController.home)
route.get("/investing", mainController.investing)
route.get("/courses", mainController.courses)
route.get("/chatbot", mainController.chatbot)


route.all("/*", (req,res) => {res.status(400).send({status: false, message: "Something isn't working"})})

module.exports = route;

