const db = require("../models");
const Type = db.types;
const Op = db.Sequelize.Op;
// Create and Save a new type
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  // Create a type
  const type = {
    name: req.body.name,
  };
  // Save type in the database
  Type.create(type)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the type."
      });
    });
};
// Retrieve all types from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Type.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving types."
      });
    });
};

// Update a type by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Type.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "type was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update type with id=${id}. Maybe type was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating type with id=" + id
      });
    });
};
// Delete a type with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Type.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "type was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete type with id=${id}. Maybe type was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete type with id=" + id
      });
    });
};
