const mongoose = require("mongoose");
mongoose.Promise = global.promise;
const url = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(url).then(() => console.log("database connected"));
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => console.log("Error:" + error));
beforeEach((done) => {
  mongoose.connection.collections.posts.drop(() => {
    done();
  });
});
