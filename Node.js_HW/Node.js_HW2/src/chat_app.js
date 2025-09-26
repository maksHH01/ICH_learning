import EventEmitter from "node:events";

const emitter = new EventEmitter();

const sendMessage = (name, message, emitter) => {
  emitter.emit("message", { name, message });
};

emitter.on("message", ({ name, message }) => {
  console.log(`${name}, ${message}`);
});

sendMessage("Bohdan", "Hallo!", emitter);
sendMessage("Bohdan", "Have a good day!", emitter);
