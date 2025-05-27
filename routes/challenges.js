// routes/challenges.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM challenges");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Bulk fetch de retos por IDs
router.post('/bulk', async (req, res) => {
    try {
        const { ids } = req.body;
        const query = `SELECT * FROM challenges WHERE id = ANY($1)`;
        const result = await pool.query(query, [ids]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
