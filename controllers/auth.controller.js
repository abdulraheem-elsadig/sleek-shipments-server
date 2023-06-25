const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
require("dotenv").config();

exports.signup = async (req, res) => {
  const { first_name, last_name, phone, email, password } = req.body;

  const emailExist = await User.findOne({
    where: {
      email,
    },
  });

  const phoneExist = await User.findOne({
    where: {
      phone,
    },
  });

  if (emailExist) {
    return res.status(409).send({ message: "Email already exists" });
  }
  if (phoneExist) {
    return res.status(409).send({ message: "Phone already exists" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      first_name,
      last_name,
      phone,
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        id: user.id,
      },

      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    return res.json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) res.status(404).json({ message: "user not found" });
    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual)
      res.status(404).json({ message: "Email or password mismatch" });
    const token = await jwt.sign(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    return res.json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// exports.getUserStatus = (req, res, next) => {
//   User.findById(req.userId)
//     .then(user => {
//       if (!user) {
//         const error = new Error('User not found.');
//         error.statusCode = 404;
//         throw error;
//       }
//       res.status(200).json({status: user.status});
//     })
//     .catch(err => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

// exports.updateUserStatus = (req, res, next) => {
//   const newStatus = req.body.status;
//   User.findById(req.userId)
//     .then(user => {
//       if (!user) {
//         const error = new Error('User not found.');
//         error.statusCode = 404;
//         throw error;
//       }
//       user.status = newStatus;
//       return user.save();
//     })
//     .then(result => {
//       res.status(200).json({message: 'User updated.'});
//     })
//     .catch(err => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };
