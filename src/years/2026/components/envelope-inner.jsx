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
    >
      {children}
    </Envelope>
  );
};
