var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var errorRouter = require("./routes/error");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var cors = require("cors");

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
///////******redis */

var redis = require("redis");

var redisClient = redis.createClient({ host: "localhost", port: 6379 });

redisClient.on("ready", function() {
  console.log("Redis is ready");
  //redisClient.del("hash-clima");
  //HASH = 'hash-clima';
  /***Santiago (CL), Zurich (CH), Auckland (NZ), Sydney (AU), Londres (UK), Georgia (USA) */
  //redisClient.hset(HASH, 'CL', (['name','Santiago','pais','Chile']));

  redisClient.hset("CL", "nombre", "Santiago de Chile");
  redisClient.hset("CL", "pais", "Chile");
  redisClient.hset("CL", "latitud", "-33.4569397");
  redisClient.hset("CL", "longitud", "-70.648269");

  redisClient.hset("CH", "nombre", "Zurich");
  redisClient.hset("CH", "pais", "Suiza");
  redisClient.hset("CH", "latitud", "47.3666687");
  redisClient.hset("CH", "longitud", "8.5500002");

  redisClient.hset("NZ", "nombre", "Auckland");
  redisClient.hset("NZ", "pais", "Nueva Zelandia");
  redisClient.hset("NZ", "latitud", "-33.8688197");
  redisClient.hset("NZ", "longitud", "174.7633315");

  redisClient.hset("AU", "nombre", "Sydney");
  redisClient.hset("AU", "pais", "Australia");
  redisClient.hset("AU", "latitud", "-36.8484597");
  redisClient.hset("AU", "longitud", "151.2092955");

  redisClient.hset("UK", "nombre", "Londres");
  redisClient.hset("UK", "pais", "Reino Unido");
  redisClient.hset("UK", "latitud", "51.5073509");
  redisClient.hset("UK", "longitud", "-0.1277583");

  redisClient.hset("USA", "nombre", "Georgia");
  redisClient.hset("USA", "pais", "USA");
  redisClient.hset("USA", "latitud", "32.1656221");
  redisClient.hset("USA", "longitud", "-82.9000751");

  redisClient.hgetall("1574550309", function(err, result) {
    console.log(result);
  });
});

redisClient.on("error", function() {
  console.log("Error in Redis");
});

////******* */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.route("/:id").get(indexRouter.getWorker);
app.use("/clima/", indexRouter);
app.use("/error", errorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
/****cabeceras */

const body_parser = require("body-parser");
app.use(
  body_parser.urlencoded({
    extended: true
  })
);
app.use(body_parser.json());
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  req.header("Content-type", "application/json");
  next();
});
/***** */
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

console.log("ejecutandose en el puerto 3000");

module.exports = app;
