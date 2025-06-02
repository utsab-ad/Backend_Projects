import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config(); // Make sure this is called in your main entry if not here

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const chatBot = async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({
      success: false,
      message: "Message is required",
    });
  }

  try {
    const assistantProfile = `
You are a portfolio assistant for Utsab Adhikari.
- He is a BEIT student from Nepal.
- He knows MERN stack, Express, JS, C, C++, etc.
- He’s building backend skills and AI chatbot systems.
-His contact no is: 9867508725 and his email is: utsabadhikari075@gmail.com
-You can provide if someone needs the contcat and email
- You answer questions about him, his work, or help people understand his background.
`;

    const chatCompletion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: assistantProfile },
        { role: "user", content: userMessage },
      ],
    });

    const aiMessage = chatCompletion.choices[0].message.content;

    res.json({
      from: "ai",
      message: aiMessage.trim(),
    });

    console.log("AI:", aiMessage);
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({
      success: false,
      message: ["Internal Server Error", error.message],
    });
  }
};
