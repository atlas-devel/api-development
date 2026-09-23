export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "customer API",
    version: "v1",
    description: "API development exercises for customer management",
  },
  servers: [
    {
      url: "http://localhost:5320",
      description: "Local server",
    },
  ],
  paths: {
    "/api/customers": {
      get: {
        tags: ["Customers"],
        summary: "Get all customers",
        description: "Returns a list of all customers",
        responses: {
          200: {
            description: "A list of customers",
            content: {
              "application/json": {
                example: {
                  success: true,
                  data: [
                    {
                      id: "1",
                      nid: "NID123456",
                      name: "Jane Doe",
                      email: "jane@example.com",
                      phone: "123456789",
                    },
                  ],
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Customers"],
        summary: "Delete all customers",
        description: "Deletes every customer",
        responses: {
          200: {
            description: "All customers deleted successfully",
            content: {
              "application/json": {
                example: {
                  success: true,
                  message: "All customers deleted successfully",
                },
              },
            },
          },
        },
      },
    },
    "/api/customer/{id}": {
      get: {
        tags: ["Customers"],
        summary: "Get customer by id",
        description: "Returns specific customer details by id",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The ID of the customer",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "customer details",
            content: {
              "application/json": {
                example: {
                  success: true,
                  data: {
                    id: "1",
                    nid: "NID123456",
                    name: "Jane Doe",
                    email: "jane@example.com",
                    phone: "123456789",
                  },
                },
              },
            },
          },
          404: {
            description: "Customer not found",
            content: {
              "application/json": {
                example: { success: false, message: "Customer not found" },
              },
            },
          },
        },
      },
      patch: {
        tags: ["Customers"],
        summary: "Update customer by id",
        description: "Updates specific customer details by id",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The ID of the customer",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nid: { type: "string" },
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  phone: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Customer updated successfully",
            content: {
              "application/json": {
                example: {
                  success: true,
                  data: {
                    id: "1",
                    nid: "NID123456",
                    name: "Jane Doe",
                    email: "jane@example.com",
                    phone: "123456789",
                  },
                },
              },
            },
          },
          404: {
            description: "Customer not found",
            content: {
              "application/json": {
                example: { success: false, message: "Customer not found" },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Customers"],
        summary: "Delete customer by id",
        description: "Deletes a customer by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The ID of the customer",
            schema: { type: "string" },
          },
        ],
        responses: {
          200: {
            description: "Customer deleted successfully",
            content: {
              "application/json": {
                example: {
                  success: true,
                  message: "Customer deleted successfully",
                },
              },
            },
          },
          404: {
            description: "Customer not found",
            content: {
              "application/json": {
                example: { success: false, message: "Customer not found" },
              },
            },
          },
        },
      },
    },
    "/api/customer": {
      post: {
        tags: ["Customers"],
        summary: "Create a new customer",
        description: "Creates a new customer with the provided details",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nid: { type: "string" },
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  phone: { type: "string" },
                },
                required: ["nid", "name", "email", "phone"],
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Customer created successfully",
            content: {
              "application/json": {
                example: {
                  success: true,
                  data: {
                    id: "1",
                    nid: "NID123456",
                    name: "Jane Doe",
                    email: "jane@example.com",
                    phone: "123456789",
                  },
                },
              },
            },
          },
          "400": {
            description: "Invalid customer data",
          },
        },
      },
    },
  },
};
