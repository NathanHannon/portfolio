const express = require("../../node_modules/express");
const router = express.Router();
const db_connection = require("../database_connection");

// -----------------------------------------------------------------------
//get all projects
router.get("/projects", (request, response, next) => {
  db_connection.query("SELECT * FROM projects ORDER BY project_id ASC", (error, results) => {
    if (error) {
      console.log('no projects found', error, response.status(404))
      return response.status(404).json('no projects found');
    }
    else {
      // console.log(response.status(200))
      return response.status(200).json(results.rows);
    }
  });
});
// --------------------Keep this around in case a solution for the details page bug is found---------------------------------------------
// get a project by Id
// router.get("/projects/:id", (request, response, next) => {
//   const id = parseInt(request.params.id);
//   db_connection.query(
//     "SELECT * FROM projects WHERE project_id=$1",
//     [id],
//     (error, results) => {
//       if (error) {
//         console.log('project not found', error, response.status(404))
//         //return an error message stating there are no projects
//         return response.status(404).json('project not found');
//       }
//       //return a single project
//       return response.status(200).json(results.rows);
//     }
//   );
// });
module.exports = router;