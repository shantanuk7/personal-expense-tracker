// src/app.js

import express from "express";
import router from "./routes/expense.route.js";

const app = express();

app.use(express.json());

// Expense Routes
app.use("/api",router);

app.get('/health', (req, res) => {
    res.status(200).json({
        "status": "ok"
    });
});

export default app;