import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("TalkBoardAuth server running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
