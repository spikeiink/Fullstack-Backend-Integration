import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    console.log("Log recebido:", req.body);

    res.status(201).json({
        message: "Log recebido"
    });
});

export default router;