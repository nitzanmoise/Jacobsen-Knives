var KnivesService = require("../services/KnivesService");
var mandrill = require("node-mandrill")("aiaICqG25A8YWc9HlSMCIA");

const KNIVES_URL = "/data/knives";

module.exports = app => {
  app.get(KNIVES_URL, (req, res) => {
    console.log(req.query);
    KnivesService.query(req.query)
      .then(users => {
        res.json(users);
      })
      .catch(() => res.status(500).send("problem getting users"));
  });

  app.get(`${KNIVES_URL}/:id`, (req, res) => {
    const knifeId = req.params.id;
    KnivesService.getById(knifeId)
      .then(selectedKnife => res.json(selectedKnife))
      .catch(() => res.status(500).send("problem"));
  });

  app.post(`${KNIVES_URL}/email`, function(req, res) {
    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = req.body.subject;
    var _message = req.body.message;
    console.log("in routes", req.body);

    //implement your spam protection or checks.

    KnivesService.sendEmail(_name, _email, _subject, _message);
  });
};
