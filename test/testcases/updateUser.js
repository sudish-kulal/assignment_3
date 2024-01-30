const request = require("supertest");
const app = require("../../app.js");

exports.shouldUpdate = async (userId) => {
  const updatedUser = {
    user_id: userId,
    name: "user",
    age: 18,
    occupation: "manager",
    gender: "male",
  };

  try {
    const response = await request(app).put("/user/update").send(updatedUser);

    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("success");
    expect(response.body.hasOwnProperty("user")).toEqual(true);
    expect(response.body.user.name).toBe(updatedUser.name);
    expect(response.body.user.occupation).toBe(updatedUser.occupation);
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.shouldNotUpdate = async () => {
  try {
    const response = await request(app).put("/user/update").send({});
    expect(response.statusCode).not.toEqual(200);
    expect(response.statusCode).toEqual(400);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
