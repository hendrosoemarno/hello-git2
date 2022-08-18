const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res) => res.send("Halo apa kabar"));
app.listen(port,() => console.log(`Aplikasi berjalan di port ${port}`));