import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("message", () => {
  console.log("Welcome to our page!");
});

emitter.on("message", () => {
  console.log("Hello World!");
});

emitter.emit("message");
