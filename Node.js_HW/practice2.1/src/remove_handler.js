import EventEmitter from "node:events";

const emitter = new EventEmitter();

function catHandler() {
  console.log("cat was announced");
}

function dogHandler() {
  console.log("dog was announced");
}

emitter.on("message", catHandler);
emitter.on("message", dogHandler);

emitter.emit("message");

emitter.removeListener("message", catHandler);

// emitter.emit("message");
