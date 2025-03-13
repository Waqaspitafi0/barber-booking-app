"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Dropdown = ({ options, onSelect, buttonContent, className, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block text-left ${className}`}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700"
      >
        {buttonContent}
        {icon}
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-40 bg-[#191919] border  border-gray-300 rounded-md shadow-lg z-10"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
              className="flex flex-row gap-2 px-4 py-2 text-sm text-[#8F8F8F] hover:bg-gray-100 cursor-pointer"
            >
              {option?.icon && (
                <Image className="mr-2" src={option?.icon} alt={option?.icon} />
              )}
              <p className="">{option.label}</p>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
