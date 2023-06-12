const jwt = require("jsonwebtoken");
const data = require("../fakeData");

const checkPermissions = (requiredPermissions) => {
  return (req, res, next) => {
    const userPermissions = req.body.permissions; // Obtém as permissões do usuário atual

    // Verifica se o usuário possui todas as permissões necessárias
    const hasPermissions = requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    );

    if (hasPermissions) {
      next(); // O usuário possui as permissões, permite que a requisição continue
    } else {
      res.status(403).json({ error: "Acesso negado" }); // O usuário não possui as permissões necessárias, retorna um erro de acesso negado
    }
  };
};

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, "chave-secreta-do-token");

    const user = data.find((u) => u.id === decoded.userId);

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

module.exports = { checkPermissions, authenticate };
