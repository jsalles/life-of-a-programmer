const fsm = require("./state_manager/state_manager");

setInterval(() => fsm.step(), 1000);
