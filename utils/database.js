import mongoose from "mongoose";

let isConnected = false; // track the connection

const url =
  "mongodb+srv://PromptShare:PromptShare@cluster0.pbipa41.mongodb.net/?retryWrites=true&w=majority";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(url, {
      dbName: "Cluster0",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
