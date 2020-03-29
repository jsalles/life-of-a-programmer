const programming = {
  enter: programmer => {
    console.log("Come on! Let's finish this sprint!");
    programmer.location = "office";
  },

  execute: programmer => {
    programmer.need_for_coffee++;
    programmer.lines_of_code_in_mind++;
    programmer.lines_of_code_written++;
    console.log("99 bugs on the board. Take one down, patch it around, 345 bugs on the board!");

    if (programmer.lines_of_code_written > 10) {
      programmer.change_state("retiring");
    } else if (programmer.need_for_coffee > 3) {
      programmer.change_state("drinking_coffee");
    } else if (programmer.lines_of_code_in_mind > 5) {
      programmer.change_state("sleeping");
    }
  },

  leave: () => {
    console.log("No need to do everything today... leave something for tomorrow!!");
  }
};

module.exports = programming;
