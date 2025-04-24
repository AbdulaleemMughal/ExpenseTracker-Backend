const express = require("express");
const cors = require("cors");
const transactionRouter = require("./routes/transaction");
const connectDataBase = require("./db/database");
const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());

const allowedOrigin = [
  "https://expense-tracker-frontend-bice-ten.vercel.app/",
  "http://localhost:3000",
];
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// routes
app.use("/", transactionRouter);

connectDataBase()
  .then(() => {
    console.log("DataBase connected Successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting the DataBase", err);
  });
