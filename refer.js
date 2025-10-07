import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Testroute für Registrierung
app.post("/register", (req, res) => {
  // refer-Code aus Query-Param oder Header holen
  const referCode =
    req.query.refer || req.headers.refer || null;

  // Daten aus Body
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
