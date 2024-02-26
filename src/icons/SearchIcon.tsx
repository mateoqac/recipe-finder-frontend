import React from "react";

interface SearchIconProps {
  width?: number;
  height?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      className="icon icon-tabler icon-tabler-search"
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
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </svg>
  );
};

export default SearchIcon;
