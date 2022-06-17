import InputLabel from "../atoms/InputLabel";
import React, { ReactElement, useEffect, useRef, useState } from "react";

interface InputOptionProps {
  label: string;
  name: string;
  options: Array<string>;
}

function InputOptions({ label, options }: InputOptionProps): ReactElement {
  const [defaultVal, setDefaultVal] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropDowRef = useRef(null);

  const handleOptionChange = (e: any) => {
    setDefaultVal(e.target.innerText);
    setIsOpen(false);
  };

  const handleDropDown = (e: any) => setIsOpen(!isOpen);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isOpen &&
        dropDowRef.current &&
        !dropDowRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  const colors: Record<string, string> = {
    Low: "bg-blue-300",
    Medium: "bg-yellow-300",
    High: "bg-orange-300",
    Critical: "bg-red-600",
  };
  const outlineColorGen = (val: string) =>
    `${colors[val]} flex-shrink-0 inline-block h-2 w-2 rounded-full`;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="mt-1 mb-4 relative" ref={dropDowRef}>
        <button
          onClick={handleDropDown}
          type="button"
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <div className="flex items-center">
            <span
              aria-label="Online"
              className={outlineColorGen(defaultVal)}
            ></span>
            <span className="ml-3 block truncate"> {defaultVal} </span>
          </div>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        {isOpen && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
          >
            {options.map((option) => (
              <li
                onClick={handleOptionChange}
                key={option}
                value={defaultVal}
                className="text-gray-900 cursor-pointer select-none relative py-3 pl-3 pr-9 hover:bg-gray-100"
                role="option"
              >
                <div className="flex items-center">
                  <span
                    className={outlineColorGen(option)}
                    aria-hidden="true"
                  ></span>
                  <span className="font-normal ml-3 block truncate">
                    {option}
                  </span>
                </div>
                {defaultVal === option && (
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default InputOptions;
