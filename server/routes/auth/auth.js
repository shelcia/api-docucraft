const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//VALIDATION OF USER INPUTS PREREQUISITES
const Joi = require("joi");
const { handleError } = require("../../helpers/handleResponses");

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

//SIGNUP USER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ error: "Email Id already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create token
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET);

    // Validate user inputs
    const { error } = await registerSchema.validateAsync(req.body);
    if (error) {
      return res
        .status(400)
        .json({ status: "error", message: error.details[0].message });
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ status: "500", message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    //CHECKING IF USER EMAIL EXISTS

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res
        .status(200)
        .send({ status: "400", message: "Email doesn't seem to exist" });
      return;
    }

    //CHECKING IF USER PASSWORD MATCHES

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(200).send({ status: "400", message: "Incorrect Password" });
      return;
    }

    //VALIDATION OF USER INPUTS

    const { error } = await loginSchema.validateAsync(req.body);
    if (error) {
      res
        .status(200)
        .send({ status: "400", message: error.details[0].message });
      return;
    } else {
      res
        .status(200)
        .header("auth-token", user.token)
        .send({
          status: "200",
          message: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        });
    }
  } catch (error) {
    res.status(200).send({ status: "400", message: error });
  }
});

module.exports = router;
