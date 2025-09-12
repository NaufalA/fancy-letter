/* eslint-disable react/prop-types */
import './index.css';

export function Envelope({
  className = '',
  style={
  width: '25rem',
  maxWidth: '90%',
  height: '15rem',
  marginTop: '10rem',
  envelopeFlapHeight: '8rem',
  envelopeFrontHeight: '8rem',
  },
  flapElement,
  children,
}) {
  return (
    <div
      className={`envelope-container ${className}`}
      style={{
        width: style.width,
        maxWidth: style.maxWidth,
        height: style.height,
        marginTop: style.marginTop,
      }}
    >
      <div className="envelope-back" />
      <input
        id="envelope-flap"
        type="checkbox"
      />
      {flapElement && (
      <div style={{
        height: '80%',
        position:'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
      }}>
        {flapElement}
      </div>
      )}
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