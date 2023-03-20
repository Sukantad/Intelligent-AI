import express from "express";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();
dotenv.config();
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  try {
    res.send("Welcome");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/ai", async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.message,
      max_tokens: 500,
    });
    res.status(200).send(response.data.choices[0].text);
  } catch (error) {
    res.status(400).send(error);
  }
});


app.listen(3050, () => {
  console.log("Server is Running");
});
