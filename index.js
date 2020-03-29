const ipt = require("ipt");

const fsm = require("./state_manager/state_manager");
const programmer = require("./model/programmer");
const Commands = require("./state_manager/commands");

const loop = () =>
  ipt(["Finish", ...Object.values(Commands)], {
    message: `I'm currently ${programmer.state}. What should I do next?`,
    autocomplete: true
  })
    .then(sel => sel[0])
    .then(nextAction => {
      if (nextAction === "Finish") return;

      return fsm.send_event(nextAction, programmer).then(() => loop());
    });

loop();
