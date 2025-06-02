import express from "express";
import { chatBot } from "../controllers/Ai.controllers.js";

const AiRoute = express.Router();

AiRoute.post("/chat", chatBot);

export default AiRoute;