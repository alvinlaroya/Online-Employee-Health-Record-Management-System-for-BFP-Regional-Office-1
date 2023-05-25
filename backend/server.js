const express = require("express");
const cors = require("cors");

const app = express();
// middleware

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const userRoutes = require("./routes/user.js");
const personnelRoutes = require("./routes/personnel.js");
const physicalExaminationRoutes = require("./routes/physicalExamination.js");
const dentalRoutes = require("./routes/dental.js");
const psychRoutes = require("./routes/psych.js");
const medicalHistoryRoutes = require("./routes/medicalHistory.js");
const ptNotes = require("./routes/ptNotes.js");
const cases = require("./routes/case.js");
const transactionLogRoutes = require("./routes/transactionLogs.js");

app.use("/api/user", userRoutes);
app.use("/api/personnel", personnelRoutes);
app.use("/api/physical-examination", physicalExaminationRoutes);
app.use("/api/dental", dentalRoutes);
app.use("/api/psych", psychRoutes);
app.use("/api/medical-history", medicalHistoryRoutes);
app.use("/api/pt-notes", ptNotes);
app.use("/api/case", cases);
app.use("/api/transaction-log", transactionLogRoutes);

// static images folder
app.use("/images", express.static("./images"));

// api

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

const PORT = process.env.PORT || 8000;

// server

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
