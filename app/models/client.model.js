module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    site_url: {
      type: Sequelize.STRING
    }
  });
  return Client;
};