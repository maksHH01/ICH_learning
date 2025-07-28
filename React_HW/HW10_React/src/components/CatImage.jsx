import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";
import { BASE_URL } from "../App";

function CatImage() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchPhoto() {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setPhoto(response.data[0]);
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <p>Загрузка изображения...</p>}
      {photo && (
        <img className={styles.image} src={photo.url} alt="Random cat" />
      )}
      <button className={styles.button} onClick={fetchPhoto}>
        Следующее фото
      </button>
    </div>
  );
}

export default CatImage;
