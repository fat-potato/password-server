const db = require("../models");
const Client = db.clients;
const Op = db.Sequelize.Op;
// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  // Create a Client
  const client = {
    name: req.body.name,
    description: req.body.description,
    site_url: req.body.site_url,
  };
  // Save Client in the database
  Client.create(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    });
};
// Retrieve all clients from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Client.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};
// Find a single client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Client.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Client with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Client with id=" + id
      });
    });
};
// Update a client by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Client.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update client with id=${id}. Maybe Client was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating client with id=" + id
      });
    });
};
// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Client.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete client with id=${id}. Maybe Client was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete client with id=" + id
      });
    });
};
// Delete all clients from the database.
exports.deleteAll = (req, res) => {
  Client.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Clients were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clients."
      });
    });
};
// Find all published Clients
// exports.findAllPublished = (req, res) => {
//   Client.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving clients."
//       });
//     });
// };