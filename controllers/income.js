const IncomeModel = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  try {
    const { title, amount, description, type, date, category } = req.body;

    if (!title || !description || !date || !category) {
      return res.status(400).json({ message: "Enter all the fields" });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ message: "Invalid Amount" });
    }

    const income = new IncomeModel({
      title,
      amount,
      description,
      type,
      date,
      category,
    });

    await income.save();

    res.status(200).json({ message: "Income Added", data: income });
  } catch (err) {
    console.error("Error adding income:", err);
    res.status(500).json({ message: "Server Error" });
  } 
};

exports.getIncome = async (req, res) => {
  try {
    const allIncome = await IncomeModel.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "All Updated Incomes", data: allIncome });
  } catch (err) {
    console.error("Error adding income:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    await IncomeModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Income Deleted" });
  } catch (err) {
    console.error("Error deleting income:", err);
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
