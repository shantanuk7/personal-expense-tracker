// src/expense.controller.js

import { getAllExpenses } from "../services/expense.service.js";

export const getExpenses = async (req,res)=> {
    try {
        const userId = parseInt(req.header('userId'));
        console.log(userId);
        
        if(isNaN(userId)){
            throw new Error("Invlaid userId. Please enter a valid integer.")
        }
        
        // Expected payload:

        /*
        {
            category ( EMI, food, transport, healthcare, rent, other ),
            payment_method (Cash, Credit Card, UPI, Debit Card),
            date_range : {
                start_date,
                end_date
            },
            amount_range : {
                min,
                max
            }
        }
        */

        const { category, payment_method, date_range, amount_range } = req.query;
        console.log(category, payment_method, date_range, amount_range);

        // TODO: Check if category exists in category table
        
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