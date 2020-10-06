const express = require("express");
const routes = express.Router();

const ImplementationsController = require('./controllers/ImplementationsController')

routes.post("/BubbleSort", ImplementationsController.BubbleSort);
routes.post("/InsertionSort", ImplementationsController.InsertionSort);
routes.post("/SelectionSort", ImplementationsController.SelectionSort);
routes.post("/CountingSort", ImplementationsController.CountingSort);

module.exports = routes;
