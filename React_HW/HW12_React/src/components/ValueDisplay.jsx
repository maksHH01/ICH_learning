import React from "react";
import { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevValueRef = useRef("");

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Текущее значение: {value}</p>
      <p>Предыдущее значение: {prevValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;
