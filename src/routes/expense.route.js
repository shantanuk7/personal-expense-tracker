// src/routes/expense.routes.js
import { Router } from "express";
import { getExpenses } from "../controllers/expense.controller.js";

const router = Router();

router.get("/expenses", getExpenses);

export default router;
