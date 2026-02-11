// src/expense.controller.js

import { getAllExpenses } from "../services/expense.service.js";

export const getExpenses = async (req,res)=> {
    const expenses = await getAllExpenses();
    res.status(200).json(expenses);
};