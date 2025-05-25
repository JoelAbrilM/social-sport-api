// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const clientesRoutes = require('./routes/clientes.routes');
app.use('/clientes', clientesRoutes);

app.listen(PORT, () => {
  console.log(`DB API escuchando en http://localhost:${PORT}`);
});
