var express = require("express");
var router = express.Router();

var redis = require("redis");
var axios = require("axios");
var redisClient = redis.createClient({ host: "localhost", port: 6379 });

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json(" hola desde el api ;)");

  const addRol = () => {
    return new Promise((resolve, reject) => {
      axios.get(
        "https://api.darksky.net/forecast/131672ca7bcb232eab0f819b70a95dd4/-33.4569397,-70.648269",
        function(err, rol) {
          if (!err) {
            resolve(rol);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  addRol()
    .then(responseRoles => {
      console.log(responseRoles);
      return res.status(200).json(responseRoles);
    })
    .catch(e => {
      console.log(e);
      return res.status(403).json({ message: e.errmsg });
    });
});

module.exports = router;
