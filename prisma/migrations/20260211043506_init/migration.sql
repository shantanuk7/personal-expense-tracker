-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Expense` (
    `expense_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `category` ENUM('EMI', 'FOOD', 'TRANSPORT', 'HEALTHCARE', 'RENT', 'OTHER') NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `payment_method` ENUM('UPI', 'CASH', 'CREDIT_CARD', 'DEBIT_CARD') NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `Expense_user_id_fkey`(`user_id`),
    PRIMARY KEY (`expense_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` ENUM('EMI', 'FOOD', 'TRANSPORT', 'HEALTHCARE', 'RENT', 'OTHER') NOT NULL,

    UNIQUE INDEX `Category_category_name_key`(`category_name`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Expense` ADD CONSTRAINT `Expense_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
