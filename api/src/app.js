import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import logsRoutes from "./routes/logs.routes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/logs", logsRoutes);

app.get("/", (req, res) => {
    res.send("API LOGS ON");
});

export default app;