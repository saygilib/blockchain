const express = require("express");
const Blockchain = require("./blockchain");
const PORT = 3000
const app = express();
const blockchain = new Blockchain();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

app.post("/api/mine", (req, res) => {
    const {data} = req.body;
    blockchain.addBlock({data});
    res.redirect("/api/blocks");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
