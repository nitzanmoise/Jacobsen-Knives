var express = require("express");
var cors = require("cors");
var app = express();
const multipart = require("connect-multiparty");
const cloudinary = require("cloudinary");

var corsOptions = {
  origin: [/http:\/\/127.0.0.1:\d+/, "http://localhost:8080"],
  credentials: true
};

// const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
// app.use(bodyParser.urlencoded({ extended: false }));

cloudinary.config({
  cloud_name: "dk0zkqt8b",
  api_key: "487379261981642",
  api_secret: "-k30BX1MyqJARHQP-ixIbGFOysI"
});

var http = require("http").Server(app);
var bodyParser = require("body-parser");
const clientSessions = require("client-sessions");

var KnivesService = require("./services/KnivesService");
var SocketService = require("./services/SocketService");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('front'));

app.use(
  clientSessions({
    cookieName: "session",
    secret: "C0d1ng 1s fun 1f y0u kn0w h0w", // set this to a long random string!
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
  })
);

global.isLoggedIn = (req, res, next) => {
  if (!req.session || !req.session.user) {
    res.end("Not allowed");
  } else {
    next();
  }
};

SocketService.init(http);

const addKnivesRoutes = require("./routes/KnivesRoutes.js");
addKnivesRoutes(app);

http.listen(3000, () => {
  console.log("listening on *:3000");
});
// app.listen​(PORT, () => console​.log​(`Example  app  listening  on  port${PORT}!`));
