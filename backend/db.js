import mongoose from 'mongoose';

async function connectToMongo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/onlinenotebook');
  console.log("Connected to MongoDB successfully");
}

export { connectToMongo};
