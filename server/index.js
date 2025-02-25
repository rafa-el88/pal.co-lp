const express = require('express');
const cors = require('cors');
const app = express();

// Middleware para processar JSON
app.use(express.json());

app.use(cors({
    origin: true, // Permite todas as origens em desenvolvimento
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    maxAge: 86400 // Cache preflight por 24 horas
}));

// ...existing code...
