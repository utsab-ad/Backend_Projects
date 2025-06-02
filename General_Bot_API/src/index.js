import express from "express";
import dotenv from "dotenv"
import AiRoute from "./routes/Ai.routes.js";
import bodyParser from 'body-parser';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
    res.status(200).send("Hello there this is a open ai chatbot");
});

app.use("/ai", AiRoute);

app.listen(PORT, (req, res) => {
    console.log(`Server is Running at PORT: ${PORT}`);
});

