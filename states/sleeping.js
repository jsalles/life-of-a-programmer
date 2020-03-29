const Commands = require("../state_manager/commands");

const sleeping = {
  name: "sleeping",

  enter: programmer => {
    console.log("One sheep... Two sheep.... Three........");
    programmer.location = "in_bed";
  },

  execute: (programmer, state_manager) => {
    programmer.lines_of_code_in_mind--;
    console.log("ZZzzZzZz");

    if (programmer.lines_of_code_in_mind <= 0) {
      return state_manager.send_event(Commands.WakeUp, programmer);
    }
  },

  leave: () => {
    console.log("Alright! Power nap accomplished!");
  }
};

module.exports = sleeping;
