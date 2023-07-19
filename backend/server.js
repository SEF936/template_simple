import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import router from "./routes/routes.js";

dotenv.config();

const port = parseInt(process.env.APP_PORT ?? "5544", 10);

const app = express();

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
  optionsSuccessStatus: 200
}));

app.use(router);


app.listen(port, (err) => {
  if (err) {
    console.error("ERROR : Server couldn't start on required port.");
  } else {
    console.info(`Server is listening on ${port}`);
  }
});