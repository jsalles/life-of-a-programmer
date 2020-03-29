const Commands = require("./commands");

const sleeping = require("../states/sleeping");
const programming = require("../states/programming");
const drinking_coffee = require("../states/drinking_coffee");
const retiring = require("../states/retiring");

const transitions = {
  [Commands.Rest]: {
    from: ["sleeping"],
    to: "sleeping",
    after: sleeping.execute
  },
  [Commands.WakeUp]: {
    from: ["sleeping"],
    to: "programming",
    before: sleeping.leave,
    after: programming.enter
  },
  [Commands.WriteCode]: {
    from: ["programming"],
    to: "programming",
    after: programming.execute
  },
  [Commands.StopProgrammingForAWhile]: {
    from: ["programming"],
    to: "drinking_coffee",
    before: programming.leave,
    after: drinking_coffee.enter
  },
  [Commands.StopProgrammingForTheDay]: {
    from: ["programming"],
    to: "sleeping",
    before: programming.leave,
    after: sleeping.enter
  },
  [Commands.StopProgrammingForLife]: {
    from: ["programming"],
    to: "retiring",
    before: programming.leave,
    after: retiring.enter
  },
  [Commands.DrinkCoffee]: {
    from: ["drinking_coffee"],
    to: "drinking_coffee",
    after: drinking_coffee.execute
  },
  [Commands.StopDrinkingCoffee]: {
    from: ["drinking_coffee"],
    to: "programming",
    before: drinking_coffee.leave,
    after: programming.enter
  },
  [Commands.EnjoyLife]: {
    from: ["retiring"],
    to: "retiring",
    after: retiring.execute
  }
};

const fsm = {
  send_event: async (event, programmer) => {
    const transition = transitions[event];
    if (!transition.from.includes(programmer.state)) {
      console.error(`Couldn't find transition ${event} from state ${programmer.state}`);
      return;
    }

    return Promise.resolve()
      .then(() => transition.before && transition.before(programmer, fsm))
      .then(() => {
        programmer.state = transition.to;
      })
      .then(() => transition.after && transition.after(programmer, fsm));
  }
};

module.exports = fsm;
