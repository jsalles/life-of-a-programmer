const programmer = require("./model/programmer");

const programmerObj = new programmer();
setInterval(() => programmerObj.update(), 1000);
