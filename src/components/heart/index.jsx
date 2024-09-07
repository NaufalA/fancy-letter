import { useMemo } from 'react';
import './index.css';

export function Heart({
  className = '',
  style = {},
  sizeRange = { min: 4, max: 6 },
  posXRange = { min: 10, max: 80 },
  posYRange = { min: 10, max: 80 },
}) {
  const styleCombined = useMemo(
    () => {
      let size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;

      let posX = Math.random() * (posXRange.max - posXRange.min) + posXRange.min;

      let posY = Math.random() * (posYRange.max - posYRange.min) + posYRange.min;

      const combinedStyle = {
        top: `${posY}%`,
        left: `${posX}%`,
        width: `${size}rem`,
        height: `${size}rem`,
        ...style,
      };
      console.log(combinedStyle);
      return combinedStyle;
    },
    [],
  );

  return (
    <img
      src="src/assets/heart.svg"
      style={styleCombined}
      className={`heart ${className}`}
    >

    </img>
  );
}