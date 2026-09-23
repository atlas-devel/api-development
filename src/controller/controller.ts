import { Request, Response } from "express";
import customers from "../data/customers.json" with { type: "json" };

export const getCustomers = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: customers,
  });
};

export const getCustomerById = (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = customers.find((customer) => customer.id === id);

  if (!customer) {
    return res.status(404).json({
      success: false,
      message: "Customer not found",
    });
  }
  res.status(200).json({
    success: true,
    data: customer,
  });
};

export const createCustomer = (req: Request, res: Response) => {
  const { name, email, nid, phone } = req.body;

  const newCustomer = {
    id: "customer " + new Date(),
    name,
    email,
    nid,
    phone,
  };
  customers.push(newCustomer);
  res.status(201).json({
    success: true,
    data: newCustomer,
  });
};

export const updateCustomer = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, nid, phone } = req.body;

  const customerIndex = customers.findIndex((customer) => customer.id === id);

  if (customerIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Customer not found",
    });
  }

  const updatedCustomer: Record<string, string> = {};

  if (name) updatedCustomer.name = name;
  if (email) updatedCustomer.email = email;
  if (nid) updatedCustomer.nid = nid;
  if (phone) updatedCustomer.phone = phone;

  // push updated customer to existing customer
  customers[customerIndex] = {
    ...customers[customerIndex],
    ...updatedCustomer,
  };

  res.status(200).json({
    success: true,
    data: customers[customerIndex],
  });
};

export const deleteCustomer = (req: Request, res: Response) => {
  const { id } = req.params;
  const customerIndex = customers.findIndex((customer) => customer.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Customer not found",
    });
  }

  const customer = customers[customerIndex];
  customers.splice(customerIndex, 1);

  res.status(200).json({
    success: true,
    message: `Customer named ${customer.name} deleted successfully`,
  });
};

export const deleteAllCustomers = (req: Request, res: Response) => {
  customers.length = 0; // Clear the array by setting its length to 0
  res.status(200).json({
    success: true,
    message: "All customers deleted successfully",
  });
};
