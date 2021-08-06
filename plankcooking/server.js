const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = process.env.PORT || 5000;

const config = {
    user: "ECraigen_W20",
    password: "L3v1athan!!",
    server: "134.39.173.35",
    database: "ECraigen_W20",
    options: {
      enableArithAbort: true,
      encrypt: false
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  };
  const newId = uuidv4();
  app.set("uniqueIdentifier", newId);
  
  sql.connect(config).catch((err) => debug(err));
  
  app.use(session({
    genid: function(req) {
      return uuidv4();
    },
    secret: "something",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 36000000, secure: false, httpOnly: true }
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const shopRouter = require("./src/routes/shopRoutes")();
const cartRouter = require("./src/routes/cartRoutes")();
app.use("/api", shopRouter);
app.use("/api", cartRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));