// [START gae_flex_postgres_app]
const createError = require('../node_modules/http-errors');
const express = require('../node_modules/express');
const Knex = require('../node_modules/knex');
const path = require('path');
const cookieParser = require('../node_modules/cookie-parser');
const logger = require('../node_modules/morgan');
const cors = require("../node_modules/cors");

const app = express();
app.enable('trust proxy');

//---------------Routers-----------------
var projectRouter = require("./routes/projects")

// const connect = () => {
//     // [START gae_flex_postgres_connect]
//     const config = {
//       user: process.env.SQL_USER,
//       password: process.env.SQL_PASSWORD,
//       database: process.env.SQL_DATABASE,
//     };
//     config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;

//     // Connect to the database
//     const knex = Knex({
//       client: 'pg',
//       connection: config,
//     });
//     // [END gae_flex_postgres_connect]
//     return knex;
// };

//use required packages
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.listen(3000);

//use create route api
app.use("/api/", projectRouter);

module.exports = app;
