import React from "react";
import { useRef, useState } from "react";
import styles from "./ToggleText.module.css";

function ToggleText() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState(0.5);

  const handleToggle = () => {
    textRef.current.style.transition = `max-height ${duration}s ease, opacity ${duration}s ease`;

    if (isVisible) {
      textRef.current.style.opacity = "0";
    } else {
      textRef.current.style.opacity = "1";
    }
    setIsVisible(!isVisible);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Скытие и отображение текста с анимацией</h1>
      <div className={styles.btnAndInput}>
        <button onClick={handleToggle}>
          {isVisible ? "Скрыть текст" : "Показать текст"}
        </button>
        <input
          type="number"
          value={duration}
          min="0.1"
          step="0.1"
          onChange={handleDurationChange}
        />
      </div>
      <div ref={textRef} className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </div>
      <hr />
    </div>
  );
}

export default ToggleText;
