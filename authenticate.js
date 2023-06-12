const data = require("../fakeData")
const jwt = require("jsonwebtoken");

const Authenticate = (req, res) => {
  const { email, password } = req.body;
  const user = data.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }
  const token = jwt.sign({ userId: user.id }, "chave-secreta-do-token");
  res.json({ token });
};

module.exports = Authenticate;
