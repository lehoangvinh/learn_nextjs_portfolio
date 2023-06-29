import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("connection failed!!");
  }
};
// mongoose.connect("mongodb://username:password@host:port/database?options...");
export default connect;
