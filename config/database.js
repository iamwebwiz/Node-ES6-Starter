import mongoose from "mongoose";

export default async () => {
  try {
    const connectionUri =
      process.env.MONGO_URI || "mongodb://localhost/node-es6-starter";

    const connection = await mongoose.connect(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`Connected to MongoDB at ${connection.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
