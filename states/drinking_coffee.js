const Commands = require("../state_manager/commands");

const drinking_coffee = {
  name: "drinking_coffee",

  enter: programmer => {
    console.log("I need some coffee to recharge!!");
    programmer.location = "kitchen";
  },

  execute: (programmer, state_manager) => {
    programmer.need_for_coffee = programmer.need_for_coffee - 5;
    console.log("Wonder how long I can stay here before my boss starts complaining.....");

    if (programmer.need_for_coffee <= 0) {
      return state_manager.send_event(Commands.StopDrinkingCoffee, programmer);
    }
  },

  leave: () => {
    console.log("Enough coffee. Those bugs are not gonna write - I mean, fix! - themselves.");
  }
};

module.exports = drinking_coffee;
