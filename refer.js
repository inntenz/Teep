const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Ordner 'public' für statische Dateien freigeben
app.use(express.static(path.join(__dirname, "public")));

// Beispielroute (z. B. POST /register)
app.post("/register", (req, res) => {
  const referCode = req.query.refer || req.headers.refer || null;
  const { username } = req.body;

  console.log("Neuer Registrierungsversuch:");
  console.log("Username:", username);
  console.log("Refer-Code:", referCode);

  res.json({
    success: true,
    username,
    refer: referCode,
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
