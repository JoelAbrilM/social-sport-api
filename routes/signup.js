// routes/signup.js
const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

// Ruta para manejar el registro de usuarios
router.post('/signup', async (req, res, next) => {
    const {
        fullName,
        username,
        email,
        phone,
        password,
        confirmPassword,
        gender,
        birthday,
    } = req.body;

    // Validaciones básicas
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden.' });
    }

    try {
        // Verificar si el usuario o correo ya existen
        const userExists = await pool.query(
            'SELECT * FROM users WHERE username = $1 OR email = $2',
            [username, email]
        );

        if (userExists.rows.length > 0) {
            return res
                .status(400)
                .json({ error: 'El nombre de usuario o correo ya están en uso.' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertar el nuevo usuario en la base de datos
        const newUser = await pool.query(
            `INSERT INTO users (full_name, username, email, phone, password, gender, birthday)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [fullName, username, email, phone, hashedPassword, gender, birthday]
        );

        console.log(`Nuevo usuario registrado: ${username} (${email})`);
        res
            .status(201)
            .json({ message: 'Usuario registrado exitosamente.', user: newUser.rows[0] });
    } catch (error) {
        next(error); // Pasa el error al middleware de manejo de errores
    }
});

module.exports = router;
