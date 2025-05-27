// server.js
require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const signupRoute = require('./routes/signup');
app.use('/api', signupRoute);

const loginRoute = require('./routes/login');
app.use('/api', loginRoute);

const challengesRouter = require("./routes/challenges");
app.use("/api/challenges", challengesRouter);

const userChallengesRouter = require("./routes/user_challenges");
app.use("/api/user_challenges", userChallengesRouter);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`DB API escuchando en http://localhost:${PORT}`);
});
