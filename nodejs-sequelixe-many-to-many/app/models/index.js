/* -------------------------- Initiating Sequelize -------------------------- */

const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorial = require("./tutorial.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);
db.tag.belongsToMany(db.tutorial, {
  through: "tutorial_tag",
  as: "tutorials",
  foreignKey: "tag_id",
});
db.tutorial.belongsToMany(db.tag, {
  through: "tutorial_tag",
  as: "tags",
  foreignKey: "tutorial_id",
});
module.exports = db;

/*
    belongsToMany() provides simple way to define the Sequelize Many-to-Many relationship.

    By passing "tutorial_tag" to through above, Sequelize will automatically generate a model named tutorial_tag as the through table (junction table), with two columns: tag_id and tutorial_id.

    Notice that the tutorial_tag table does not have an id field.
*/ 

/* -------------------------------------------------------------------------- */

