const mongoose = require("mongoose");

const logger = require("../logger/api.logger");

const connect = () => {
  const url = process.env.MONGO_CONNECTION_STRING;
  logger.info(
    "process.env.MONGO_CONNECTION_STRING :: " +
      process.env.MONGO_CONNECTION_STRING
  );
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === "test") {
      const Mockgoose = require("mockgoose").Mockgoose;
      const mockgoose = new Mockgoose(mongoose);
      mockgoose.prepareStorage().then(() => {
        mongoose.connect(url, {}).then((res, err) => {
          if (err) return reject(err);
          resolve();
        });
      });
    } else {
      mongoose
        .connect(url, {})
        .then(() => console.log("Database Connected"))
        .catch((err) => console.log(err));

      mongoose.connection.once("open", async () => {
        logger.info("Connected to database");
      });

      mongoose.connection.on("error", (err) => {
        logger.error("Error connecting to database", err);
      });
    }
  });
};

function disconnect() {
  mongoose.disconnect();
  mongoose.connection.once("close", async () => {
    console.log("Disconnected to database");
  });
}

module.exports = {
  connect,
  disconnect,
};
