// src/expense.service.js

import { getExpenses } from "../repositories/expense.repository.js";

export const getAllExpenses = async () => {     
    return await getExpenses();
}
