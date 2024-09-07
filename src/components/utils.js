export function randomTransformStyles({
  sizeRange = { min: 4, max: 6 },
  posXRange = { min: 10, max: 80 },
  posYRange = { min: 10, max: 80 },
  rotRange = {
    x: { min: 50, max: 50 },
    y: { min: 0, max: 0 },
    z: { min: 90, max: 90 },
  },
}) {
      const size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
      const posX = Math.random() * (posXRange.max - posXRange.min) + posXRange.min;
      const posY = Math.random() * (posYRange.max - posYRange.min) + posYRange.min;

      const rot = {
        x: Math.random() * (rotRange.x.max - rotRange.x.min) + rotRange.x.min,
        y: Math.random() * (rotRange.y.max - rotRange.y.min) + rotRange.y.min,
        z: Math.random() * (rotRange.z.max - rotRange.z.min) + rotRange.z.min,
      }

      return {
        position: 'absolute',
        top: `${posY}%`,
        left: `${posX}%`,
        width: `${size}rem`,
        height: `${size}rem`,
        transform: `rotateX(${rot.x}) rotateY(${rot.y}) rotateZ(${rot.z})`
      };
};