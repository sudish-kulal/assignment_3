const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 3000;

const {
  DB: { MONGODB },
} = require("./src/configs/config.js");

mongoose.connect(MONGODB.URI);

app.listen(port, () => {
  console.log(`server is running on port ${3000}`);
});
