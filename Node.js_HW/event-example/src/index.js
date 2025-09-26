import EventEmitter from "node:events";

const emitter = new EventEmitter();

// emitter.once("start-server", () => {
//   console.log("start server");
// });

// setTimeout(() => emitter.emit("start-server"), 1000);

// // регистрация события
// emitter.on("welcome", (username) => {
//   console.log(`Welcome to server, ${username}`);
// });

// setTimeout(() => emitter.emit("welcome", "Max"), 3000);
// setTimeout(() => emitter.emit("welcome", "Alex"), 4000);
// setTimeout(() => emitter.emit("welcome", "Raphinha"), 5000);

const welcomeMessage = (name) => {
  console.log(`Welcome to server, ${name}`);
};

emitter.on("welcome", () => {
  console.log("Welcome first emitter");
});

emitter.on("welcome", welcomeMessage);

setTimeout(() => {
  emitter.emit("welcome", "Max");
  emitter.removeListener("welcome", welcomeMessage);
}, 1000);
