import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
let client;
let clientPromise;

try {
  if (process.env.NODE_ENV === "production") {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  } else {
    clientPromise = MongoClient.connect(uri, options);
  }
} catch (error) {
  console.error("MongoDB connection error:", error);
}
export default clientPromise;
