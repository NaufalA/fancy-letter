/* eslint-disable react/prop-types */
import { Envelope } from '../../../components';
import './envelope-outer.css';

export default function EnvelopeOuter({ children }) {
  return (
    <Envelope
      style={{
        envelopeFlapHeight: '5rem',
        envelopeFrontHeight: '12rem'

      }}
    >
      {children}
    </Envelope>
  );
};
