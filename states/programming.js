const Commands = require("../state_manager/commands");

const programming = {
  name: "programming",

  enter: programmer => {
    console.log("Come on! Let's finish this sprint!");
    programmer.location = "office";
  },

  execute: (programmer, state_manager) => {
    programmer.need_for_coffee++;
    programmer.lines_of_code_in_mind++;
    programmer.lines_of_code_written++;
    console.log("99 bugs on the board. Take one down, patch it around, 345 bugs on the board!");

    if (programmer.lines_of_code_written > 10) {
      return state_manager.send_event(Commands.StopProgrammingForLife, programmer);
    }
    if (programmer.need_for_coffee > 3) {
      return state_manager.send_event(Commands.StopProgrammingForAWhile, programmer);
    }
    if (programmer.lines_of_code_in_mind > 5) {
      return state_manager.send_event(Commands.StopProgrammingForTheDay, programmer);
    }
  },

  leave: () => {
    console.log("No need to do everything today... leave something for tomorrow!!");
  }
};

module.exports = programming;
