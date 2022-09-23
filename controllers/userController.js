const User = require("../models/User");

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, emailId } = req.body;
  try {
    const createdUser = await User.create({
      firstName,
      lastName,
      emailId,
    });
    res.json({ data: createdUser });
  } catch (error) {
    console.log("user not created: ", error);
  }
};

module.exports.getUsers = async (req, res) => {
  const allUsers = await User.find();
  try {
    if (allUsers) {
      res.json({ data: allUsers });
    }
  } catch (err) {
    console.log("users not found: ", err);
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedUser = await User.findByIdAndDelete({ id });
  } catch (error) {
    console.log("User has not been deleted: ", error);
  }
};
