const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const menu = [{name: "Usuarios"}, {name: "Promociones"}, {name: "Etc"}]

app.get("/menu", (req, res) => {
  return res.status(200).json(menu);
});

app.listen(port, () => {
  console.log(`Api listening on port ${port}`);
});
