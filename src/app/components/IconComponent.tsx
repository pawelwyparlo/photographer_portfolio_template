import React from "react";

interface IconComponentProps {
  width?: number;
  height?: number;
  imageName: string;
}

export const IconComponent: React.FC<IconComponentProps> = ({
  width = 24,
  height = 24,
  imageName,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`public/images/${imageName}.svg`} />
    </svg>
  );
};
