// src/expense.controller.js

import { getAllExpenses } from "../services/expense.service.js";

export const getExpenses = async (req,res)=> {
    try {
        const userId = parseInt(req.header('userId'));
        console.log(userId);
        
        if(isNaN(userId)){
            throw new Error("Invlaid userId. Please enter a valid integer.")
        }
        
        // Getting category, payment_method, date_range and amount_range from params
        // Category can be: EMI, food, transport, healthcare, rent, other
        // Payment Method: Cash, Credit Card, UPI, Debit Card

        const { category, payment_method, date_range, amount_range } = req.query;
        console.log(category, payment_method, date_range, amount_range);
        
        const expenses = await getAllExpenses(userId, req.query);
        res.status(200).json(expenses);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            "code":"INVALID_REQUEST_DATA",
            "message": error.message || "Unexpected request data."
        });
    }
};