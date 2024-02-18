import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
import { MongoClient } from "mongodb";

const client = new MongoClient(MONGODB_URI);

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};

export const init = async () => {
  try {
    await client.connect();
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

export const getClient = () => {
  return client;
};