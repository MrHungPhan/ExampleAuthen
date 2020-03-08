const jwt = require("jsonwebtoken");
const User = require("../model/User");

module.exports.registerUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.json({ status: 200, data: "Register Success" });
  } catch (error) {
    res.json({ status: 405, data: error.message });
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        const token = jwt.sign(
          { email: user.email, password: user.password },
          "privateKey"
        );
        await User.findByIdAndUpdate({ _id: user.id }, { token });
        res.json({ status: 200, data: { token } });
      } else {
        res.json({ status: 403, data: "Password is wrong" });
      }
    } else {
      res.json({ status: 401, data: "User don't existed" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getUserData = (req, res) => {
  const user = req.user;
  res.json({ status: 200, data: user });
};
