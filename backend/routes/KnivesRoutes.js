var KnivesService = require("../services/KnivesService");
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
};
