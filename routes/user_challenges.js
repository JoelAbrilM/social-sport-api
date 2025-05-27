// routes/user_challenges.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await pool.query(
            "SELECT challenge_id FROM user_challenges WHERE user_id = $1",
            [userId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// routes/user_challenges.js (continuación)
router.post("/", async (req, res) => {
    const { user_id, challenge_id } = req.body;
    try {
        await pool.query(
            "INSERT INTO user_challenges (user_id, challenge_id) VALUES ($1, $2)",
            [user_id, challenge_id]
        );
        res.status(201).send("Challenge assigned");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Obtener progreso
router.get("/progress/:userId/:challengeId", async (req, res) => {
    const { userId, challengeId } = req.params;
    try {
        const result = await pool.query(
            "SELECT progress FROM user_challenges WHERE user_id = $1 AND challenge_id = $2",
            [userId, challengeId]
        );
        const progress = result.rows[0]?.progress || [];
        res.json({ progress });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Actualizar progreso
router.put("/:userChallengeId/progress", async (req, res) => {
    const { userChallengeId } = req.params;
    const { progress } = req.body;
    try {
        await pool.query(
            "UPDATE user_challenges SET progress = $1 WHERE id = $2",
            [JSON.stringify(progress), userChallengeId]
        );
        res.status(204).send();
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Completar reto
router.put("/:userChallengeId/complete", async (req, res) => {
    const { userChallengeId } = req.params;
    try {
        await pool.query(
            "UPDATE user_challenges SET completed_at = NOW() WHERE id = $1",
            [userChallengeId]
        );
        res.status(204).send();
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;
