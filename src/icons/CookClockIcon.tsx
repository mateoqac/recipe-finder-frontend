import React from "react";

interface CookClockIconProps {
  width?: number;
  height?: number;
}

const CookClockIcon: React.FC<CookClockIconProps> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className="icon icon-tabler icon-tabler-clock-play"
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
      <path d="M12 7v5l2 2"></path>
      <path d="M17 22l5 -3l-5 -3z"></path>
      <path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292"></path>
    </svg>
  );
};

export default CookClockIcon;
