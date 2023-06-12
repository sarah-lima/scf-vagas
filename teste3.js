var data = require("./fakeData");

module.exports = function (req, res) {
  let name = req.query.name;
  const index = data.findIndex((item) => item.name === name);
  if (index !== -1) {
    data.splice(index, 1); // Remove o elemento do array
    return res.send("success");
  }
  return res.status(400).send("Não foi possível deletar usuário")
};
