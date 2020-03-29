const sleeping = {
  enter: programmer => {
    console.log("One sheep... Two sheep.... Three........");
    programmer.location = "in_bed";
  },

  execute: programmer => {
    programmer.lines_of_code_in_mind--;
    console.log("ZZzzZzZz");

    if (programmer.lines_of_code_in_mind <= 0) {
      programmer.change_state("programming");
    }
  },

  leave: () => {
    console.log("Alright! Power nap accomplished!");
  }
};

module.exports = sleeping;
