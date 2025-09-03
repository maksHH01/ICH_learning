import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchQuote } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className={styles.quoteContainer}>
      {status === "loading" && <p className={styles.loading}>Загрузка...</p>}
      {status === "failed" && <p className={styles.error}>Ошибка: {error}</p>}
      {status === "succeeded" && (
        <div>
          <p className={styles.quote}>{quote}</p>
          <br />
          <p>- {author}</p>
        </div>
      )}
      <button className={styles.button} onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
