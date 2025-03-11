import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found-container" style={{ 
      textAlign: 'center',
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404 🕵️♂️</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Oops! The page you're looking for has vanished into the void.
      </p>
      <Link 
        to="/"
        style={{
          textDecoration: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '5px',
          fontSize: '1.1rem'
        }}
      >
        Return to Safety
      </Link>
    </div>
  );
};