import React from "react";

interface PrepClockIconProps {
  width?: number;
  height?: number;
}

const PrepClockIcon: React.FC<PrepClockIconProps> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className="icon icon-tabler icon-tabler-clock-plus"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M12 7v5l3 3"></path>
    </svg>
  );
};

export default PrepClockIcon;
