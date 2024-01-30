const User = require("../models/user.model.js");

const findAll = async () => {
  try {
    const users = await User.find();
    return { status: 200, data: { message: "success", user_list: users } };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const create = async (userData) => {
  try {
    const { name, age, occupation, gender } = userData;

    if (!name || !age || !occupation || !gender)
      return {
        status: 400,
        data: { message: "name/age/occupation/gender cannot be empty" },
      };

    const userDetail = await User.findOne({ name, occupation });

    if (userDetail)
      return { status: 400, data: { message: "user already exist" } };

    const newUser = await User.create({ name, age, occupation, gender });

    return { status: 200, data: { message: "success", user: newUser } };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const update = async (userData) => {
  try {
    const { user_id, name, age, occupation, gender } = userData;

    if (!user_id)
      return { status: 400, data: { message: "user id cannot be empty" } };

    const updateObj = {};

    if (name) updateObj.name = name;
    if (age) updateObj.age = age;
    if (occupation) updateObj.occupation = occupation;
    if (gender) updateObj.gender = gender;

    const updatedUser = await User.findByIdAndUpdate(user_id, updateObj, {
      new: true,
    });

    if (!updatedUser) return { status: 404, data: { message: "invalid user" } };
    return { status: 200, data: { message: "success", user: updatedUser } };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  findAll,
  create,
  update,
};
