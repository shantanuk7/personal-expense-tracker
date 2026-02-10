# Personal Expense Tracker – REST API Backend

## Problem Statement

Build a RESTful API for a personal expense tracker.  
The API should allow a user to record and manage expenses.  
All data must be stored in a database.

## Requirements

### 1. Add Expense
Allow the user to add a new expense with the following fields:
- Title or description
- Amount
- Category
- Payment method
- Transaction date

Categories are predefined and already stored in the database.  
No APIs are needed to manage categories.

### 2. Get All Expenses
Allow the user to fetch all expenses.

Support optional filters:
- Category
- Payment method
- Date range
- Amount range

### 3. Get Expense by ID
Allow the user to fetch a single expense by its ID.  
Return an error if the expense does not exist.

### 4. Update Expense
Allow partial updates to an existing expense.

### 5. Delete Expense
Allow the user to delete an expense by its ID.

### 6. Total Expense by Date Range
Provide an API that returns the total amount spent within a given date range.
