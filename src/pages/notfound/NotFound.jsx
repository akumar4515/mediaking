import React from "react";
import { Link } from "react-router-dom";
import styles from './notFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 🕵️‍♂️</h1>
      <p className={styles.message}>
        Oops! The page you're looking for has vanished into the void.
      </p>
      <Link to="/" className={styles.returnButton}>
        Return to Safety
      </Link>
    </div>
  );
};