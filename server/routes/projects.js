const express = require('express');
const router = express.Router();
const db_connection = require("../database_connection");
// const { PrismaClient } = require('@prisma/client'); // Remove or comment out Prisma client import

// const prisma = new PrismaClient(); // Remove or comment out Prisma client instantiation

// -----------------------------------------------------------------------
// Get all projects
//! Prisma version (commented out)
// router.get("/projects", async (req, res, next) => {
// 	res.setHeader("X-Frame-Options", "DENY");
// 	res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
// 	// cache control
// 	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

// 	try {
// 		const allProjects = await prisma.project.findMany({
// 			orderBy: { position: 'asc' }
// 		});
// 		return res.status(200).json(allProjects);
// 	} catch (error) {
// 		console.error('No projects found', error);
// 		return res.status(404).json('No projects found');
// 	}
// });

//!! SQL Query version
// Define the SQL query string
const allProjectsQuery = 'SELECT * FROM project ORDER BY position ASC';

router.get("/projects", (req, res, next) => {
	res.setHeader("X-Frame-Options", "DENY");
	res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
	// cache control
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	// Use the defined query string
	db_connection.query(allProjectsQuery, (error, results) => {
		if (error) {
			console.error('Error fetching projects:', error); // Log the actual error
			return res.status(500).json('Error fetching projects'); // Use 500 for server errors
		}
		else {
			// console.log(res.status(200)); // Logging the status object isn't very useful
			if (results.rows.length === 0) {
				return res.status(404).json('No projects found');
			}
			return res.status(200).json(results.rows);
		}
	});
});

module.exports = router; // Ensure the router is exported