module.exports = (app) => {
  const clients = require("../controllers/client.controller.js");
  const types = require("../controllers/type.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.post("/", clients.create);

  // Retrieve all clients
  router.get("/", clients.findAll);

  // Retrieve all published clients
  // router.get("/published", clients.findAllPublished);

  // Retrieve a single client with id
  router.get("/:id", clients.findOne);

  // Update a client with id
  router.put("/:id", clients.update);

  // Delete a client with id
  router.delete("/:id", clients.delete);

  // Delete all clients
  router.delete("/", clients.deleteAll);

  // Create a new Credential type
  router.post("/types", types.create);

  // Retrieve all Credential types
  router.get("/types", types.findAll);

  // Update a Credential type with id
  router.put("/types/:id", types.update);

  app.use("/api/clients", router);
};
