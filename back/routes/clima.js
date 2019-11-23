var express = require("express");
var router = express.Router();

var redis = require("redis");
var redisClient = redis.createClient({ host: "localhost", port: 6379 });

/* GET home page. */
router.get("/:id", function(req, res, next) {
  res.json(" hola desde el api id;)");
console.log(req.params.id)
return
  const addRol = id => {
    return new Promise((resolve, reject) => {
      redisClient.hgetall(id, function(err, rol) {
        if (!err) {
          resolve(rol);
        } else {
          reject(err);
        }
      });
    });
  };

  addRol(req.params.id)
    .then(responseRoles => {
      return res.status(200).json(responseRoles);
    })
    .catch(e => {
      console.log(e);
      return res.status(403).json({ message: e.errmsg });
    });
});

module.exports = router;
