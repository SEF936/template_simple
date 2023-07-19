import express from 'express';
import cors from 'cors';

const app = express();
const port = 5544;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});