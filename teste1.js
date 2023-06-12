var data = require("./fakeData");

const getUser = (req, res, next) => {
  let name = req.query.name;
  let getByName = data.filter((item) => item.name === name);
  if (getByName.length > 0) {
    const count = getByName[0].count;
    getByName[0].count = count + 1;
  }
  return res.send(getByName);
};

const getUsers = (req, res, next) => {
    return res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
