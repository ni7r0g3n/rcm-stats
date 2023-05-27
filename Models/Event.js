const Model = require("./Model");

class Event extends Model {
  table = "events";
  fields = ["type", "count", "last"];
  primaryKey = "id";

  constructor(obj) {
    super(Event, obj);
  }
}

module.exports = Event;
