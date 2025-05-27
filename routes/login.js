const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../db');
require('dotenv').config();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
        }

        const user = result.rows[0];

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
        }

        // Crear el payload para el JWT
        const payload = {
            id: user.id,
            full_name: user.full_name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            birthday: user.birthday,
            created_at: user.created_at
        };

        // Firmar el token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Imprimir el token en la consola del backend
        console.log('Token JWT generado:', token);

        // Enviar el token al frontend
        res.json({ token });
    } catch (err) {
        console.error('Error en el inicio de sesión:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
