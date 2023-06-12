const data = require("./fakeData");

module.exports = function (req, res) {
  var name = req.query.name;

  const { count } = data.find((item) => item.name === name);
  res.send(`Usuário ${name} foi lido ${count} vezes.`);
};
