import express from 'express';
const router = express.Router();
import db_connection from "../database_connection";

// -----------------------------------------------------------------------
//get all projects
const allProjects = "SELECT * FROM projects ORDER BY position ASC";
const projectRouter = router.get("/projects", (req: any, res: any, next: any): void => {
	res.setHeader("X-Frame-Options", "DENY");
	res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
	// cache control
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	db_connection.query(allProjects, (error: any, results: { rows: any; }) => {
		if (error) {
			console.log('no projects found', error, res.status(404))
			return res.status(404).json('no projects found');
		}
		else {
			console.log(res.status(200));
			return res.status(200).json(results.rows);
		}
	});
});
// --------------------Keep this around in case a solution for the details page bug is found---------------------------------------------
// get a project by Id
// const singleProject = "SELECT * FROM projects WHERE id=$1";
// router.get("/projects/:id", (req, res, next) => {
//   const id = parseInt(req.params.id);
//   db_connection.query(
//     singleProject,
//     [id],
//     (error, results) => {
//       if (error) {
//         console.log('project not found', error, res.status(404))
//         //return an error message stating there are no projects
//         return res.status(404).json('project not found');
//       }
//       //return a single project
//       console.log(res.status(200));
//       return res.status(200).json(results.rows);
//     }
//   );
// });
export default projectRouter;