import { connectToMongo } from './db.js';
import express from 'express';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

// MongoDB database connection
connectToMongo();

const app = express();
const port = 5000;

// middleware to parse the object into json are follow helper
app.use(express.json());

// http requestion get method root
app.get('/',(req,res)=>{
  res.send('hello index only');
})

app.use('/auth',authRoutes);
app.use('/notes',notesRoutes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

