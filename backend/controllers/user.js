require("dotenv").config();

const { Sequelize, json } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/user");
const Vonage = require("@vonage/server-sdk");
const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

// MODEL
const User = db.users;
const RolesAndPermission = db.rolesAndPermission;

// CREATE CASE
const registerUser = async (req, res) => {
  const { user, roles } = req.body;

  const {
    fname,
    mname,
    lname,
    email,
    password,
    address,
    birthDate,
    position,
    phone,
  } = user;

  let param = {
    fname,
    mname,
    lname,
    email,
    password: password,
    address,
    birthDate,
    position,
    verified: true,
    status: 0,
    phone,
    hasUpdate: 0,
  };

  const responseUser = await User.create(param);
  await RolesAndPermission.create({
    ...roles,
    personnelId: responseUser.dataValues.id
  })
  res.status(200).send(responseUser);
};

const authenticateUserWithemail = async (req, res) => {
  const { email, password } = req.body;
  /* res.json({
      email, password
  }) */
  try {
    User.findOne({
      where: {
        email: email, // user email
      },
    }).then(async (response) => {
      if (!response) return res.sendStatus(404);
      if (
        !response.dataValues.password ||
        !(await response.validPassword(password, response.dataValues.password))
      ) {
        res.sendStatus(404);
      } else {
        /* if (!response.dataValues.verified)
          return res.status(200).send("Not verified user"); */
        const token = jwt.sign(response.dataValues, process.env.SECRET_JWT_KEY);
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
          token: token,
          id: response.dataValues.id,
        });
      }
    });
  } catch (error) {
    res.sendStatus(404).json({
      error: {
        message: "user match failed",
      },
    });
  }
};

const getAuthenticatedUser = async (req, res) => {
  const userResponse = await User.findOne({
    where: {
      id: req.body.id, // user email
    },
    attributes: [
      "fname",
      "mname",
      "lname",
      "email",
      "address",
      "birthDate",
      "position",
      "status",
      "hasUpdate",
    ],
  });

  const rolesResponse = await RolesAndPermission.findOne({
    where: {
      personnelId: req.body.id, // user email
    }
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    user: userResponse.dataValues,
    roles: rolesResponse
  });
};


const getAllUsers = async (req, res) => {
  let users = await User.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    data: users,
  });
};

// UPDATE USER
const updatePersonnel = async (req, res) => {
  const user = req.body;

  let resultUser = await User.findOne({ where: { id: req.params.id } });
  if (resultUser) {
    resultUser.update({
      verified: user.verified,
      status: user.status.value,
      hasUpdate: user.hasUpdate,
    });
  }

  res.sendStatus(200);
};

// FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  const { email, pet } = req.body;
  let resultUser = await User.findOne({ where: { email: email } });

  let r = (Math.random() + 1).toString(36).substring(7);
  let newPassword = `${pet}${r}`;

  if (resultUser) {
    resultUser.update({
      password: newPassword,
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.json({
      message: "success",
      data: {
        newPassword: newPassword
      },
    });
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendStatus(404).json({
      error: {
        message: "user match failed",
      },
    });
  }
};

const changePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  console.log(req.body)

  try {
    User.findOne({
      where: {
        email: email, // user email
      },
    }).then(async (response) => {
      if (!response) return res.sendStatus(404);
      if (
        !response.dataValues.password ||
        !(await response.validPassword(oldPassword, response.dataValues.password))
      ) {
        res.sendStatus(404);
        console.log("NOT VERIFIED", oldPassword)
      } else {
        response.update({
          password: newPassword,
        });
      }
    });
  } catch (error) {
    res.sendStatus(404).json({
      error: {
        message: "user match failed",
      },
    });
  }
}

module.exports = {
  authenticateUserWithemail,
  registerUser,
  forgotPassword,
  getAuthenticatedUser,
  getAllUsers,
  updatePersonnel,
  changePassword
};
