import express from "express";
import cors from "cors";
import aiRouter from "./Controller/ChatController.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", aiRouter);

app.listen(3050, () => {
  console.log("Server is running");
});
