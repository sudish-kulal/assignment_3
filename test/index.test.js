jest.setTimeout(30000);
const createTestCase = require("./testcases/createUser");
const listTestCase = require("./testcases/listUser");
const updateTestCase = require("./testcases/updateUser");
const mongoose = require("mongoose");

beforeAll(async () => {
  require("dotenv").config();
  await mongoose.connect(`${process.env.MONGODB_URI}_jest`);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("running test", () => {
  let testUser;

  it("should create user", async () => {
    testUser = await createTestCase.shouldCreate();
  });

  it("should not create user", () => createTestCase.shouldNotCreate());

  it("should list user", () => listTestCase.shouldList());

  it("should update user", async () => {
    expect(testUser._id).toBeDefined();
    await updateTestCase.shouldUpdate(testUser._id);
  });

  it("should not update", () => updateTestCase.shouldNotUpdate());
});
