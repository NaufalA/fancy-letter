import { useMemo } from 'react';
import './index.css';
import { randomTransformStyles } from '../utils';
import heartSVG from '../../assets/heart.svg';

export function Heart({
  className = '',
  style = {},
  sizeRange = { min: 4, max: 6 },
  posXRange = { min: 10, max: 80 },
  posYRange = { min: 10, max: 80 },
  rotRange = {
    x: { min: 50, max: 50 },
    y: { min: 0, max: 0 },
    z: { min: 90, max: 90 },
  },
}) {
  const styleCombined = useMemo(
    () => {
      const combinedStyle = {
        ...randomTransformStyles({
          sizeRange,
          posXRange,
          posYRange,
          rotRange,
        }),
        ...style,
      };
      return combinedStyle;
    },
    [],
  );

  return (
    <img
      src={heartSVG}
      style={styleCombined}
      className={`heart ${className}`}
    >
    </img>
  );
}