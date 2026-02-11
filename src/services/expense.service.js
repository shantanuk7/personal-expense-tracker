// src/expense.service.js

import { getExpenses } from "../repositories/expense.repository.js";
import { getUniqueUser } from "../repositories/user.repository.js";

export const getAllExpenses = async (userId) => {

    // Checking if the user exists before fetching expenses
    const userExists = await getUniqueUser(userId);

    if (!userExists) {
        const error = new Error(`User with ID ${userId} does not exist`);
        error.status = 404;
        throw error;
    }

    return await getExpenses();
}
