import React from "react";

const CategoryItem = ({ text, padding }) => {
  return (
    <li
      className={`${
        padding ? padding : "p-2"
      } flex item-center justify-center bg-primary-light rounded-xl  cursor-pointer transition duration-400 select-none hover:bg-secondary hover:text-white`}
    >
      {text}
    </li>
  );
};

export default CategoryItem;
