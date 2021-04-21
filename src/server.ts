import express from "express";

import "./database";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Ola Mundo" });
});

app.post("/users", (req, res) => {
  res.json({ message: "Ola Mundo" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
