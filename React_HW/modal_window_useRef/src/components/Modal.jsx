import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.classList.remove("opening");
      modal.classList.add("closing");

      const onAnimationEnd = () => {
        modal.removeEventListener("animationend", onAnimationEnd);
        setIsVisible(false);
        document.body.style.overflow = "";
      };

      modal.addEventListener("animationend", onAnimationEnd);
    }
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (modal && isVisible) {
      modal.classList.remove("closing");
      modal.classList.add("opening");
    }
  }, [isVisible]);

  return (
    <>
      <button onClick={openModal}>Open Modal Window</button>

      {isVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Модальное окно</h2>
            <p>Контент внутри модального окна.</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
