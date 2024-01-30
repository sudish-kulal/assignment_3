require("dotenv").config();
const env = process.env;
const config = {};

config.DB = {
  MONGODB: {
    URI: env.MONGODB_URI,
  },
};

config.PORT = env.PORT;

module.exports = config;
