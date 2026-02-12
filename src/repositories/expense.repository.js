// src/expense.repository.js

import prisma from "../config/db.js";

const getCategories = async ()=>{
    return await prisma.category.findMany();
}

export const getExpenses = async (userId, filters)=>{

    const { category } = filters;

    console.log("Filtering by category: "+ category);

    const where = {
        user_id: userId
    };

    if (category) {
        where.category = category;
    }

    try {
        const expenses = await prisma.expense.findMany({
            where: where
        })
        
        return expenses;
    } catch (error) {
        throw new Error("Database Query Failed.");
    }
}