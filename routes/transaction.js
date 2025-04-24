const express = require("express");
const { addIncome, getIncome, deleteIncome } = require("../controllers/income");
const { addExpense, getExpense, deleteExpense } = require("../controllers/expence");

const transactionRouter = express.Router();

// routers for income
transactionRouter.post("/add-income", addIncome);
transactionRouter.get("/get-income", getIncome);
transactionRouter.delete("/delete-income/:id", deleteIncome);

// routers for expense
transactionRouter.post("/add-expense", addExpense);
transactionRouter.get("/get-expense", getExpense);
transactionRouter.delete("/delete-expense/:id", deleteExpense);

module.exports = transactionRouter;
