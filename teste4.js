var data = require("./fakeData");

module.exports = function (req, res) {
  let { name, job } = req.body;
  let idReq = req.query.id;

  const reg = data.find(({ id }) => id == idReq);
  if (!!reg) {
    reg.name = name;
    reg.job = job;
    return res.send(reg);
  }
  return res.status(400).send("Usúario não atualizado");
};