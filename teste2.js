var data = require("./fakeData");

module.exports = function (req, res) {
  let { name, job, permissions } = req.body;
  let id = data.length + 1;

  let newUser = {
    id,
    name,
    job,
    count: 0,
    permissions: permissions || [],
  };

  data.push(newUser);

  return res.status(201).send(newUser);
};
