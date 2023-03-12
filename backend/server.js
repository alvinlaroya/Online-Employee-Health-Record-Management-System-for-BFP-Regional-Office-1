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

app.use("/api/user", userRoutes);
app.use("/api/personnel", personnelRoutes);

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
