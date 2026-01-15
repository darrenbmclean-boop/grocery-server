const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("image"), (req, res) => {
  console.log("Product:", req.body.productName);
  console.log("Price:", req.body.price);
  console.log("Image file:", req.file);

  res.json({ success: true });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
