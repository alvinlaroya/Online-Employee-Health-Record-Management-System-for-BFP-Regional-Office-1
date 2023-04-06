require("dotenv").config();
const { clear } = require("console");
const jwt = require("jsonwebtoken");
const clearance = require("../controllers/clearance.js");

const router = require("express").Router();

// routes
router.put("/updatePsych/:id", clearance.updateClearance);

function middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_JWT_KEY, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
