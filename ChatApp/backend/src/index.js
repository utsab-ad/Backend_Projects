import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();


app.get("/", (req, res) => {
        res.send("Hello sir ji whatsupp")
})

app.listen(PORT, () => {
  console.log(`The server is Running on PORT: ${PORT}`);
});
