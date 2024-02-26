import React from "react";

interface CategoryIconProps {
  width?: number;
  height?: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className="icon icon-tabler icon-tabler-category"
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
      <path d="M4 4h6v6h-6z"></path>
      <path d="M14 4h6v6h-6z"></path>
      <path d="M4 14h6v6h-6z"></path>
      <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    </svg>
  );
};

export default CategoryIcon;
