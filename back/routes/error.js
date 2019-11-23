var express = require("express");
var router = express.Router();

var redis = require("redis");
var axios = require("axios");
var redisClient = redis.createClient({ host: "localhost", port: 6379 });

/* GET home page. */
router.post("/", function(req, res, next) {

  /********************************error */

  const error = (id, mensaje) => {
    return new Promise((resolve, reject) => {
      redisClient.hset(id, "error", mensaje, function(err, rol) {
        if (!err) {
      
          resolve(rol);

        } else {

          reject(err);
        }
      });
    });
  };
  (id = req.body.id), (mensaje = req.body.mensaje);

  error(id, mensaje)
    .then(responseRoles => {
      return res.status(200).json(responseRoles);
    })
    .catch(e => {
      console.log(e);
      return res.status(403).json({ message: e.errmsg });
    });
});

module.exports = router;
