const retiring = {
  name: "retiring",

  enter: programmer => {
    console.log("That's it! I'm done!");
    programmer.location = "beach";
  },

  execute: () => {
    console.log("Stop bugging me... I'm done!");
  },

  leave: () => {}
};

module.exports = retiring;
