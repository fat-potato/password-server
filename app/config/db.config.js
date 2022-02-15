module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root2808",
  DB: "password_manager_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
