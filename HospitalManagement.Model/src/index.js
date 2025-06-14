import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5060;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from hospital management system model");
});

app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}`);
})