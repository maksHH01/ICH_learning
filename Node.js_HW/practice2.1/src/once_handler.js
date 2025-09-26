import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.once("message", () => {
  console.log("hallo!");
});

emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
