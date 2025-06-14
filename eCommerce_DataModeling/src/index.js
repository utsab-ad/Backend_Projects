import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hey from Script side");
})

app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}`);
})