const sleeping = require("../states/sleeping");
const programming = require("../states/programming");
const drinking_coffee = require("../states/drinking_coffee");
const retiring = require("../states/retiring");

module.exports = {
  onRest: { to: "sleeping", after: sleeping.execute },
  onWakeUp: {
    to: "programming",
    before: sleeping.leave,
    after: programming.enter
  },
  onWriteCode: { to: "programming", after: programming.execute },
  onStopProgrammingForAWhile: {
    to: "drinking_coffee",
    before: programming.leave,
    after: drinking_coffee.enter
  },
  onStopProgrammingForTheDay: {
    to: "sleeping",
    before: programming.leave,
    after: sleeping.enter
  },
  onStopProgrammingForLife: {
    to: "retiring",
    before: programming.leave,
    after: retiring.enter
  },
  onDrinkCoffee: {
    to: "drinking_coffee",
    after: drinking_coffee.execute
  },
  onStopDrinkingCoffee: {
    to: "programming",
    before: drinking_coffee.leave,
    after: programming.enter
  },
  onEnjoyLife: {
    to: "retiring",
    after: retiring.execute
  }
};
