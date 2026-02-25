// src/repository/user.repository.js

import prisma from "../config/db.js";

export const getUniqueUser = async (userId) => {
    return await prisma.user.findUnique({
        where: { user_id: userId }
    });
};