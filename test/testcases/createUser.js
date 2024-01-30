const request = require("supertest");
const app = require("../../app.js");

exports.shouldCreate = async () => {
  const user = {
    name: "user" + Math.random() * 100,
    age: 18,
    occupation: "developer",
    gender: "male",
  };

  try {
    const response = await request(app).post("/user/create").send(user);
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("success");
    return { ...response.body.user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.shouldNotCreate = async () => {
  try {
    const response = await request(app).post("/user/create").send({});
    expect(response.statusCode).not.toEqual(200);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
