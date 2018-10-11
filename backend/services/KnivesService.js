const mongo = require("mongodb");
var DBService = require("./DBService");
var mandrill = require("node-mandrill")("aiaICqG25A8YWc9HlSMCIA");

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

function sendEmail(_name, _email, _subject, _message) {
  mandrill(
    "/messages/send",
    {
      message: {
        to: [{ email: "nitzanmois@gmail.com", name: "Jim Rubenstein" }],
        from_email: _email,
        subject: _subject,
        text: _message
      }
    },
    function(error, response) {
      //uh oh, there was an error
      if (error) console.log(JSON.stringify(error));
      //everything's good, lets see what mandrill said
      else console.log(response, "sucsses!");
    }
  );
}

module.exports = {
  query,
  getById,
  sendEmail
};
