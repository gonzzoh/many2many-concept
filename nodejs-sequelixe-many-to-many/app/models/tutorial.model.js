/* ------------------------ Defining Sequelize Tutorial Models ----------------------- */

module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    });
    return Tutorial;
  };

  /*   
    This Sequelize Model represents tutorials table in MySQL database. These columns will be generated automatically: id, title, description, createdAt, updatedAt.

    After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

    create a new Tutorial: create(object)
    find a Tutorial by id: findByPk(id)
    get all Tutorials: findAll()
    update, destroy,…

  */


  /* -------------------------------------------------------------------------- */