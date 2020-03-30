const States = require("./states");

const fsm = {
  send_event: async (event, programmer) => {
    const transition = States[programmer.state][event];
    if (!transition) {
      console.error(`Couldn't find transition ${event} from state ${programmer.state}`);
      return;
    }

    return Promise.resolve()
      .then(() => transition.before && transition.before(programmer))
      .then(() => {
        programmer.state = transition.to;
      })
      .then(() => transition.after && transition.after(programmer, fsm));
  }
};

module.exports = fsm;
