import React from "react";

const AccordionItem = ({ title, desc, isOpen, toggleAccord }) => {
  return (
    <div className="border rounded-md mb-1 ">
      <button
        className={`w-full p-4 text-left bg-gray-200  ${
          isOpen ? "font-bold" : "font-semibold"
        }
                   hover:bg-gray-300 transition duration-300`}
        onClick={toggleAccord}
      >
        {title}
        <span
          className={`float-right transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }  
                         transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && <div className="p-4 bg-white ">{desc}</div>}
    </div>
  );
};

export default AccordionItem;
