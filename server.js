import express from "express";
import cors from "cors";
import quests from "./api/quests.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/quests", quests);
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
