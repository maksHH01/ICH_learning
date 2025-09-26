import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("tick", (seconds) => {
  console.log(`Left ${seconds}`);
});

function countdown(seconds, emitter) {
  const intervalId = setInterval(() => {
    seconds--;
    if (!seconds) {
      clearInterval(intervalId);
    }
    emitter.emit("tick", seconds);
  }, 1000);
}

countdown(10, emitter);
