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
      return state_manager.send_event("enough_code_written_for_life");
    }
    if (programmer.need_for_coffee > 3) {
      return state_manager.send_event("need_coffee");
    }
    if (programmer.lines_of_code_in_mind > 5) {
      return state_manager.send_event("too_many_lines_of_code_in_mind");
    }
  },

  leave: () => {
    console.log("No need to do everything today... leave something for tomorrow!!");
  }
};

module.exports = programming;
