import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'production') {
  // In production mode, we'll set up a connection that's reused across requests
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
} else {
  // In development mode, create a new client for every request
  clientPromise = MongoClient.connect(uri, options);
}

export default clientPromise;
