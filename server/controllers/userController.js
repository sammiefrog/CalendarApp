const User  = require("../models").User;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { canRegister, canLogin } = require("./validation");
const { secret } = require("../config/keys");

// exporting methods for testing and validating user input when registering and logging in
module.exports = {
  RegistrationController: async (req, res) => {
    // const { username, password } = req.body;
    // console.log(req.body)

    const { err } = await canRegister(req.body);
    if (err) return res.status(400).send(error.details[0].message);

    // const usernameIsRegistered = await User.findOne({ where: username });
    // if (usernameIsRegistered)
    //   return res.status(400).send("This username is already in use");

    // const salt = await bcrypt.genSalt();
    // const hash = await bcrypt.hash(password, salt);
    

    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      // return res.status(200).send("New User Created")
      const savedUser = await newUser.save();

      const jwt_payload = {
        id: savedUser.id,
        username: savedUser.username,
      };

      const token = await jwt.sign(jwt_payload, secret, { expiresIn: "1hr" });
      res.status(200).send({ token: `Bearer ${token}` });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  LoginController: async (req, res) => {
    const { username, password } = req.body;

    const { err } = await canLogin(req.body);
    if (err) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({ where: { username: req.body.username } });
    if (!existingUser)
      return res.status(400).send("Username doesn't exist");

    const matching = await bcrypt.compare(password, existingUser.password);
    if (!matching)
      return res.status(400).send("Username or password is incorrect!");

    const jwt_payload = {
      id: existingUser.id,
      username: existingUser.username,
    };

    const token = await jwt.sign(jwt_payload, secret, { expiresIn: "1hr" });
    res.status(200).send({ token: `Bearer ${token}` });
  },
};
