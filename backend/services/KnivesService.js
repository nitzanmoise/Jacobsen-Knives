const mongo = require("mongodb");
var DBService = require("./DBService");

function query(knives) {
  return new Promise((resolve, reject) => {
    return DBService.dbConnect().then(db => {
      db.collection("knives")
        .find()
        .toArray((err, knives) => {
          if (err) return reject(err);
          console.log(knives);
          resolve(knives);
        });
    });
  });
}

function getById(knifeId) {
  knifeId = new mongo.ObjectID(knifeId);
  return new Promise((resolve, reject) => {
    return DBService.dbConnect().then(db => {
      db.collection("knives").findOne(
        {
          _id: knifeId
        },
        (err, res) => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          resolve(res);
        }
      );
    });
  });
}

module.exports = {
  query,
  getById
};
