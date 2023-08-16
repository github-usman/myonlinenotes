import { connectToMongo } from './db.js';
import express from 'express';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

connectToMongo();

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.get('/',(req,res)=>{
  res.send('hello from express only');
})
app.use('/auth',authRoutes);
app.use('/notes',notesRoutes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
