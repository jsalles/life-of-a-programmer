const Transitions = require("./transitions");
const Commands = require("./commands");

module.exports = {
  sleeping: {
    [Commands.Rest]: Transitions.onRest,
    [Commands.WakeUp]: Transitions.onWakeUp
  },
  programming: {
    [Commands.WriteCode]: Transitions.onWriteCode,
    [Commands.StopProgrammingForAWhile]: Transitions.onStopProgrammingForAWhile,
    [Commands.StopProgrammingForTheDay]: Transitions.onStopProgrammingForTheDay,
    [Commands.StopProgrammingForLife]: Transitions.onStopProgrammingForLife
  },
  drinking_coffee: {
    [Commands.DrinkCoffee]: Transitions.onDrinkCoffee,
    [Commands.StopDrinkingCoffee]: Transitions.onStopDrinkingCoffee
  },
  enjoying_life: {
    [Commands.EnjoyLife]: Transitions.onEnjoyLife
  }
};
