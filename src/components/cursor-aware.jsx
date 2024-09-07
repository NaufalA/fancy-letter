import React, { useState, useRef } from 'react';

export function CursorAware({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event) => {
    if (elementRef.current && isHovered) {
      const elementRect = elementRef.current.getBoundingClientRect();
      const cursorX = event.clientX;
      const elementX = elementRect.left + elementRect.width / 2;

      const offsetX = cursorX - elementX;
      const distance = Math.min(Math.abs(offsetX), 100); // Adjust the maximum offset distance as needed

      const direction = offsetX > 0 ? 'right' : 'left';
      const style = {
        transform: `translate(${direction} ${distance}px)`,
      };

      elementRef.current.style.cssText = `transform: ${style.transform};`;
    }
  };

  return (
    <div
      className="animation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={elementRef}
    >
      {children}
    </div>
  );
}
