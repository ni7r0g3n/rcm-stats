const express = require("express");
const app = express();
const cors = require("cors");
const Event = require("./Models/Event");
const port = 3000;

app.use(cors());
app.use(express.static("Tools"));

app.post("/rcms", (req, res) => {
  let eventType = req.query.ev;
  new Event()
    .where("type", eventType)
    .first()
    .then((ev) => {
      if (ev) {
        console.log("Event found, updating...");
        ev.count++;
        ev.last = new Date();
        ev.save();
        res.send("Ok");
      } else {
        throw new Error("Event not found");
      }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
