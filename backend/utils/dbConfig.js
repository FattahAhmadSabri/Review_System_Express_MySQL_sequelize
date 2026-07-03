const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mytestdb", "root", "@SQL321", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error:", error);
  }
})();

module.exports = sequelize;
