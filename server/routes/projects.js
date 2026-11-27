const express = require('express');
const router = express.Router();
const db = require('../database_connection');

const ALL_PROJECTS_QUERY = 'SELECT * FROM project ORDER BY position ASC';

router.get('/projects', async (req, res) => {
	res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

	try {
		const results = await db.query(ALL_PROJECTS_QUERY);
		return res.status(200).json(results.rows);
	} catch (error) {
		console.error('Error fetching projects:', error);
		return res.status(500).json({ error: 'Error fetching projects' });
	}
});

module.exports = router;