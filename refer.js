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
  const referUrl = req.headers.referer; // komplette Seiten-URL
  let referCode = null;

  if (referUrl) {
    const url = new URL(referUrl);
    referCode = url.searchParams.get("refer");
  }

  console.log("Refer-Code:", referCode);
  res.json({ success: true, refer: referCode });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
