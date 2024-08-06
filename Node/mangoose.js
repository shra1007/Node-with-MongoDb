const mongoose = require("mongoose");

async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/NewSurveyToolMaster")
    .then(() => {
      console.log("Connection SuccessFull");
    });
}

module.exports = {
  main,
};
