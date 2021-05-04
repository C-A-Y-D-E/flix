import { useState } from "react";
import CustomDropDown from "components/shared/CustomDropDown";
const CategoryPanel = () => {
  const [category, setCategory] = useState("Popular");
  return (
    <div className="flex p-5 mt-6 items-center justify-between bg-primary-light rounded-2xl  flex-wrap md:flex-nowrap space-y-2 sm:space-y-0">
      <div className="flex text-sm  md:text-base">
        <CustomDropDown />
        <CustomDropDown />
      </div>

      <div className="bg-primary-dark w-full md:w-auto rounded-3xl text-sm md:text-base">
        <ul className="flex gap-6 p-4 ">
          <li onClick={() => setCategory("Popular")}>
            <span
              className={`${
                category === "Popular"
                  ? "bg-primary-light rounded-2xl text-secondary "
                  : ""
              } p-2 cursor-pointer transition duration-400 select-none`}
            >
              Newest
            </span>
          </li>
          <li onClick={() => setCategory("Most")}>
            <span
              className={`${
                category === "Most"
                  ? "bg-primary-light rounded-2xl text-secondary "
                  : ""
              } p-2 cursor-pointer transition duration-400 select-none`}
            >
              Featured
            </span>
          </li>
          <li onClick={() => setCategory("Recent")}>
            <span
              className={`${
                category === "Recent"
                  ? "bg-primary-light rounded-2xl text-secondary "
                  : ""
              } p-2 cursor-pointer transition duration-400 select-none`}
            >
              Popular
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryPanel;
