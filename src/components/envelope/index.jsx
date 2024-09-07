import { useRef } from 'react';
import './index.css';

export function Envelope({
  style= {
  width: '25rem',
  maxWidth: '90%',
  height: '15rem',
  marginTop: '10rem',
  envelopeFlapHeight: '8rem',
  envelopeFrontHeight: '8rem',
  },
  children,
}) {
  return (
    <div className="envelope-container" style={{
    width: style.width,
    maxWidth: style.maxWidth,
    height: style.height,
    marginTop: style.marginTop,
    }}>
      <div className="envelope-back" />
      <input
        id="envelope-flap"
        type="checkbox"
      />
      <label
        className="envelope-flap"
        htmlFor="envelope-flap"
        style={{
          borderTopWidth: style.envelopeFlapHeight,
        }}
      />
      <div className="envelope-mid" />
      <div
        className="envelope-front"
        style={{
          borderBottomWidth: style.envelopeFrontHeight,
        }}
        />
      <div className="card">
        {children}
      </div>
    </div>
  );
}