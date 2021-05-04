import React, { useState, useRef, useEffect } from "react";

import { Menu, Transition } from "@headlessui/react";
const CustomDropDown = () => {
  const [drop, setdrop] = useState(false);
  const [current, setCurrent] = useState("All genre");

  return (
    <Menu as="div" className="inline-block relative">
      <Menu.Button
        onClick={() => setdrop(true)}
        type="button"
        className="inline-flex items-center  justify-center w-fullshadow-sm px-4 py-2 font-medium   focus:outline-none focus:ring-0 "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {current}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Menu.Button>

      <Menu.Items
        className={`origin-top-right absolute z-40 left-4 mt-2 w-40 rounded-md shadow-lg bg-primary-light ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={() => setCurrent("Account settings")}
                class={` block px-4 py-2 text-sm ${
                  active ? "text-secondary" : "text-white"
                }`}
                role="menuitem"
                id="menu-item-0"
              >
                Account settings
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                onClick={() => setCurrent("Account settings")}
                class={` block px-4 py-2 text-sm ${
                  active ? "text-secondary" : "text-white"
                }`}
                role="menuitem"
                id="menu-item-0"
              >
                Action
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={() => setCurrent("Account settings")}
                class={` block px-4 py-2 text-sm ${
                  active ? "text-secondary" : "text-white"
                }`}
                role="menuitem"
                id="menu-item-0"
              >
                Comedy
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default CustomDropDown;
