const programming = require("../states/programming");
const drinking_coffee = require("../states/drinking_coffee");
const sleeping = require("../states/sleeping");
const retiring = require("../states/retiring");

class programmer {
  constructor() {
    this.state = sleeping;
    this.need_for_coffee = 0;
    this.lines_of_code_in_mind = 0;
    this.lines_of_code_written = 0;
    this.location = "";
  }

  update() {
    this.state.execute(this);
  }

  change_state(new_state) {
    this.state.leave();

    switch (new_state) {
      case "programming":
        this.state = programming;
        break;
      case "drinking_coffee":
        this.state = drinking_coffee;
        break;
      case "sleeping":
        this.state = sleeping;
        break;
      case "retiring":
        this.state = retiring;
        break;
    }

    this.state.enter(this);
  }
}

module.exports = programmer;
