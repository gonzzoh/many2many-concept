/* -------------------- CREATING CONTROLLER FOR TUTORIAL -------------------- */

const db = require("../models");
const Tutorial = db.tutorial;
const Tag = db.tag;

/* ------------------------ CREATE AND SAVE TUTORIALS ----------------------- */

exports.create = (tutorial) => {
    return Tutorial.create({
      title: tutorial.title,
      description: tutorial.description,
    })
      .then((tutorial) => {
        console.log(">> Created Tutorial: " + JSON.stringify(tutorial, null, 4));
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while creating Tutorial: ", err);
      });
  };

/* ------------------------- RETRIEVE ALL TUTORIALS ------------------------- */

exports.findAll = () => {
    return Tutorial.findAll({
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ["tag_id", "tutorial_id"],
          // },
        },
      ],
    })
      .then((tutorials) => {
        return tutorials;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Tutorials: ", err);
      });
  };

  
/* ----------------------- GET THE TUTORIAL FOR AN ID ----------------------- */

exports.findById = (id) => {
    return Tutorial.findByPk(id, {
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ["tag_id", "tutorial_id"],
          // },
        },
      ],
    })
      .then((tutorial) => {
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while finding Tutorial: ", err);
      });
  };

  /* -------------------------------------------------------------------------- */