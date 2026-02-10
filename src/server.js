// src/server.js

import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT;

app.get('/health', (req, res) => {
    res.status(200).json({
        "status": "ok"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});