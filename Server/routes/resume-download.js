var express = require("express");
var router = express.Router();
var resource = express.Res();
var db_connection = require("../connections/database_connection");

// -----------------------------------------------------------------------
//get file path and prompt download
router.get("/download", (request, response, next )=> {
    const resume = '${__dirname}/docs/Nathan_Hannon_Resume.pdf';
    response.download(resume) //set disposition and send file
});