import express from "express";

const app = express();

// register routes
app.get("/", (req, res) => {
  res.send("Up and Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at:${PORT}`);
});
