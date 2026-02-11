// src/expense.repository.js

import prisma from "../config/db.js";

const getCategories = async ()=>{
    return await prisma.category.findMany();
}

export const getExpenses = async (userId, filters)=>{
    // First getting the categories list

    const { category } = filters;

    console.log("Filtering by category: "+ category);

    // const dbCategories = await getCategories();

    const expenses = await prisma.expense.findMany({
        where: {
            user_id: {
                equals: userId
            },
            category: {
                equals: category.toUpperCase()
            }
        }
    })

    return await prisma.expense.findMany();
}