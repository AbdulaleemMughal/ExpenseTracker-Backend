const ExpenseModal = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, description, type, date, category } = req.body;

    if (!title || !description || !date || !category) {
      return res.status(400).json({ message: "Enter all the fields" });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ message: "Invalid Amount" });
    }

    const income = new ExpenseModal({
      title,
      amount,
      description,
      type,
      date,
      category,
    });

    await income.save();

    res.status(200).json({ message: "Expense Added", data: income });
  } catch (err) {
    console.error("Error adding expense:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const allIncome = await ExpenseModal.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "All Updated Expenses", data: allIncome });
  } catch (err) {
    console.error("Error adding income:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await ExpenseModal.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense Deleted" });
  } catch (err) {
    console.error("Error adding income:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * AddIncome :-
 * destructure all the request from the body
 * make a new Instance of the Modal
 * validate all the request
 * then save it to the database
 *
 * GetIncome:-
 * find all the incomes
 * sort them accordingly it was added
 * and send as a response
 *
 * DeleteIncome:-
 * find the income by id and delete it
 */
