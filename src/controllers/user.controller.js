const userService = require("../services/user.service.js");

const listUser =async (req, res) => {
  try {
    const response =await userService.findAll();
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const createUser =async (req, res) => {
  try {
    const userData = req.body;
    const response =await userService.create(userData);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};
 
const updateUser =async (req, res) => {
  try {
    const userData = req.body;
    const response =await userService.update(userData);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { listUser, createUser, updateUser };
