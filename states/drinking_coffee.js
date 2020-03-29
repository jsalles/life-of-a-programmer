const drinking_coffee = {
  enter: programmer => {
    console.log("I need some coffee to recharge!!");
    programmer.location = "kitchen";
  },

  execute: programmer => {
    programmer.need_for_coffee = programmer.need_for_coffee - 5;
    console.log("Wonder how long I can stay here before my boss starts complaining.....");

    if (programmer.need_for_coffee <= 0) {
      programmer.change_state("programming");
    }
  },

  leave: () => {
    console.log("Enough coffee. Those bugs are not gonna write - I mean, fix! - themselves.");
  }
};

module.exports = drinking_coffee;
