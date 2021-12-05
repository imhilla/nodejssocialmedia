const mongoose = require("mongoose");
const { MongoMemoryServer } = require('mongodb-memory-server');
const logger = require("../logger/api.logger");

const connect = async () => {
  const url = process.env.MONGO_CONNECTION_STRING;
  logger.info(
    "process.env.MONGO_CONNECTION_STRING :: " +
    process.env.MONGO_CONNECTION_STRING
  );
  if (process.env.NODE_ENV === "test") {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.createConnection(uri)
  }
  // else {
  //   mongoose
  //     .connect(url, {})
  //     .then(() => console.log("Database Connected"))
  //     .catch((err) => console.log(err));

  //   mongoose.connection.once("open", async () => {
  //     logger.info("Connected to database");
  //   });

  //   mongoose.connection.on("error", (err) => {
  //     logger.error("Error connecting to database", err);
  //   });
  // }

};

function disconnect() {
  if (process.env.NODE_ENV === "test") {
    mongoose.connection.dropDatabase();
    mongoose.connection.close();
    mongod.stop();
  } else {
    mongoose.disconnect();
    mongoose.connection.once("close", async () => {
      console.log("Disconnected to database");
    });
  }
}
const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}
module.exports = {
  connect,
  disconnect,
  clearDatabase
};
