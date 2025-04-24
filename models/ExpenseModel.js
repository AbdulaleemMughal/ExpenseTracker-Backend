const mongoose = require("mongoose");

const ExpenceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      trim: true,
      required: true,
      maxLength: 20,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
    },
    date: {
      type: Date,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", ExpenceSchema);

// {
//   "title": "Hello",
//   "amount": 23,
//   "description": "New Description",
//   "category": "category",
//   "date": "0-10-2003",
//   "type": "income"
// }
