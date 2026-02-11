// src/expense.repository.js

import prisma from "../config/db.js";

export const getExpenses = async ()=>{
    return await prisma.expense.findMany();
}