module.exports = (app) => {
  const clients = require("../controllers/client.controller.js");
  const types = require("../controllers/type.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.post("/clients", clients.create);

  // Retrieve all clients
  router.get("/clients", clients.findAll);

  // Retrieve all published clients
  // router.get("/published", clients.findAllPublished);

  // Retrieve a single client with id
  router.get("/clients/:id", clients.findOne);

  // Update a client with id
  router.put("/clients/:id", clients.update);

  // Delete a client with id
  router.delete("/clients/:id", clients.delete);

  // Delete all clients
  router.delete("/clients", clients.deleteAll);

  // Create a new Credential type
  router.post("/types", types.create);

  // Retrieve all Credential types
  router.get("/types", types.findAll);

  // Update a Credential type with id
  router.put("/types/:id", types.update);

  app.use("/api/manager", router);
};
