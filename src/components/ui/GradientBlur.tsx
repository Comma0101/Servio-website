import React from 'react';

interface GradientBlurProps {
  color1: string;
  color2?: string;
  color3?: string;
  position: string;
  width: string;
  height: string;
  opacity?: string;
  blur?: string;
}

const GradientBlur: React.FC<GradientBlurProps> = ({
  color1,
  color2,
  color3,
  position,
  width,
  height,
  opacity = '0.6',
  blur = '100px'
}) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...getPositionStyles(position),
        width,
        height,
        background: getGradient(color1, color2, color3),
        opacity,
        filter: `blur(${blur})`,
        zIndex: 0
      }}
    />
  );
};

const getPositionStyles = (position: string) => {
  switch (position) {
    case 'top-left':
      return { top: '0', left: '0' };
    case 'top-right':
      return { top: '0', right: '0' };
    case 'bottom-left':
      return { bottom: '0', left: '0' };
    case 'bottom-right':
      return { bottom: '0', right: '0' };
    case 'center':
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    case 'top-center':
      return { top: '0', left: '50%', transform: 'translateX(-50%)' };
    case 'bottom-center':
      return { bottom: '0', left: '50%', transform: 'translateX(-50%)' };
    case 'left-center':
      return { left: '0', top: '50%', transform: 'translateY(-50%)' };
    case 'right-center':
      return { right: '0', top: '50%', transform: 'translateY(-50%)' };
    default:
      return {};
  }
};

const getGradient = (color1: string, color2?: string, color3?: string) => {
  if (color3 && color2) {
    return `radial-gradient(circle, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
  } else if (color2) {
    return `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;
  } else {
    return color1;
  }
};

export default GradientBlur;