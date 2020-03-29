const programmer = require("./model/programmer");
const programming = require("./states/programming");
const drinking_coffee = require("./states/drinking_coffee");
const sleeping = require("./states/sleeping");
const retiring = require("./states/retiring");

const transitions = [
  { on: "rested_enough", from: ["sleeping"], to: programming },
  { on: "too_many_lines_of_code_in_mind", from: ["programming"], to: sleeping },
  { on: "need_coffee", from: ["programming"], to: drinking_coffee },
  { on: "no_more_need_for_coffee", from: ["drinking_coffee"], to: programming },
  { on: "enough_code_written_for_life", from: ["programming"], to: retiring }
];

class fsm {
  constructor() {
    this.state = sleeping;
    this.transitions = transitions;
    this.programmer = new programmer();
  }

  send_event = event => {
    const transition = this.transitions.find(
      t => t.on === event && t.from.includes(this.state.name)
    );
    if (!transition)
      throw new Error(`Couldn't find transition ${event} from state ${this.state.name}`);

    // leave current state
    this.state.leave(this.programmer);

    // update state
    this.state = transition.to;

    // enter next state
    this.state.enter(this.programmer);
  };

  step = () => {
    return this.state.execute(this.programmer, this);
  };
}

module.exports = new fsm();
