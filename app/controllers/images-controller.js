const db = require("../db/mysql");

let consultImages = (req, res) => {
  db.consultImages(req.query)
    .then((result) => {
      return res.download(`./images/${result[0].url}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  consultImages,
};