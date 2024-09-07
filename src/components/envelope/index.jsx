import { useRef, useState } from 'react';
import './index.css';

export function Envelope() {
  return (
    <div className="envelope-container">
      <div className="envelope-back" />
      <input
        id="envelope-flap"
        type="checkbox"
      />
      <label
        className="envelope-flap"
        htmlFor="envelope-flap"
      />
      <div className="envelope-mid" />
      <div className="envelope-front" />
      <div className="card">
        <p style={{ textAlign: 'center' }}>
          Happy Birthday
        </p>
      </div>
    </div>
  );
}