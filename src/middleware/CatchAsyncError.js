const { respo } = require("../utils/util");

module.exports = (thefunc) => (req, res, next) => {
  Promise.resolve(thefunc(req, res, next)).catch((err) => {
    respo(res, 500, err?.message, err);
  });
};
