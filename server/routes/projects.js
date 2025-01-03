const express = require('express');
const router = express.Router();
const db_connection = require("../database_connection");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// -----------------------------------------------------------------------
// Get all projects
router.get("/projects", async (req, res, next) => {
	res.setHeader("X-Frame-Options", "DENY");
	res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
	// cache control
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

	try {
		const allProjects = await prisma.project.findMany({
			orderBy: { position: 'asc' }
		});
		return res.status(200).json(allProjects);
	} catch (error) {
		console.error('No projects found', error);
		return res.status(404).json('No projects found');
	}
});

module.exports = router;

//!! SQL Query version
// router.get("/projects", (req, res, next) => {
// 	res.setHeader("X-Frame-Options", "DENY");
// 	res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
// 	// cache control
// 	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
// 	db_connection.query(allProjects, (error, results) => {
// 		if (error) {
// 			console.log('no projects found', error, res.status(404))
// 			return res.status(404).json('no projects found');
// 		}
// 		else {
// 			console.log(res.status(200));
// 			return res.status(200).json(results.rows);
// 		}
// 	});
// });