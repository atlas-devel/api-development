import express from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomers,
} from "../controller/controller.js";

const Router = express.Router();

Router.get("/customers", getCustomers); //get all customers
Router.get("/customer/:id", getCustomerById); //get a customer by id
Router.post("/customer", createCustomer); //create a new customer
Router.patch("/customer/:id", updateCustomer); //update a customer by id
Router.delete("/customer/:id", deleteCustomer); //delete a customer by id
Router.delete("/customers", deleteAllCustomers); //delete all customers

export default Router;
