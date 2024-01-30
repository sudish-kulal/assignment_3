const request = require("supertest");
const app = require("../../app.js");

exports.shouldList = async () => {
  try {
    const response = await request(app).get("/user/list");

    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("success");
    expect(response.body.hasOwnProperty("user_list")).toEqual(true);
    expect(Array.isArray(response.body.user_list)).toEqual(true);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
