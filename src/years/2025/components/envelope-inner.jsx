/* eslint-disable react/prop-types */
import { Envelope } from '../../../components';
import './envelope-inner.css';

export default function EnvelopeInner({ children }) {
  return (
    <Envelope
      className="drop-in"
      style={{
        envelopeFlapHeight: '15rem',
        envelopeFrontHeight: '0rem'
      }}
      flapElement={(
        <h1
          style={{
            marginBottom: '0rem',
            color: '#FFD700',
            fontFamily: '"Brush Script MT", cursive',
            fontSize: '4rem',
          }}
        >
          Thank You
        </h1>
      )}
    >
      {children}
    </Envelope>
  );
};
