var express = require("express");
var router = express.Router();
var db_connection = require("../connections/database_connection");

// -----------------------------------------------------------------------
//get all projects
router.get("/projects", (request, response, next) => {
    db_connection.query("SELECT * FROM projects", (error, results) => {
        if(error) {
            return response.status(404).json('Projects not found');
        }
        else {
            return response.status(200).json(results.rows);
        }
    });
});
module.exports = router;