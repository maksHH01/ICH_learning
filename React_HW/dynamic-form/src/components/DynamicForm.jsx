import React from "react";
import { useForm } from "react-hook-form";
import styles from "../components/DynamicForm.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submited data: ", data);
  }

  const firstFieldValue = watch("firstField");
  const isFirstFieldValid = firstFieldValue && firstFieldValue.length >= 6;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>First Field</label>
      <input
        className={styles.input}
        type="text"
        {...register("firstField", {
          required: "Это поле обязательно",
          minLength: {
            value: 6,
            message: "Минимум 6 символа",
          },
        })}
      />
      {errors.firstField && (
        <p className={styles.error}>{errors.firstField.message}</p>
      )}

      {isFirstFieldValid && (
        <>
          <label>Second Field</label>
          <input
            className={styles.input}
            type="text"
            {...register("secondField", {
              required: "Это поле тоже обязательно",
            })}
          />
          {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
          )}
        </>
      )}

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
