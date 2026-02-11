// src/expense.controller.js

import { getAllExpenses } from "../services/expense.service.js";

export const getExpenses = async (req,res)=> {
    try {
        const userId = parseInt(req.header('userId'));
        console.log(userId);
        
        if(isNaN(userId)){
            throw new Error("Invlaid userId. Please enter a valid integer.")
        }
        
        const expenses = await getAllExpenses(userId);
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            "code":"INVALID_REQUEST_DATA",
            "message": error.message || "Unexpected request data."
        });
    }
};