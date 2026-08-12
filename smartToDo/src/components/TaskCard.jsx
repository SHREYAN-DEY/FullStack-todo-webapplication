import React, { useState, useRef, useEffect } from 'react';

const TaskCard = ({
  title,
  description,
  image,
  priority = 'moderate',
  createdDate
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine background color based on priority prop
  const getBgColor = (level) => {
    switch (level.toLowerCase()) {
      case 'extreme':
        return 'bg-[#e2f4ef]';
      case 'moderate':
        return 'bg-[#ffeaea]';
      case 'low':
        return 'bg-[#D9FED8]';
      default:
        return 'bg-[#ffeaea]';
    }
  };

  // Determine priority text color for visual contrast (based on the screenshot styling)
  const getPriorityTextColor = (level) => {
    switch (level.toLowerCase()) {
      case 'extreme':
        return 'text-red-500';
      case 'moderate':
        return 'text-orange-500';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div
      className={`relative w-full max-w-[380px] rounded-[2rem] p-6 shadow-sm flex flex-col transition-all duration-300 ${getBgColor(
        priority
      )}`}
    >
      {/* 3-Dots Menu Button */}
      <div className="absolute top-6 right-6" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-400 hover:text-gray-600 focus:outline-none p-1"
          aria-label="Task options"
        >
          {/* Custom SVG to match the hollow 3-dots in the screenshot */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="19" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-lg overflow-hidden z-10 border border-gray-100">
            <button
              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => {
                console.log('Edit clicked');
                setIsMenuOpen(false);
              }}
            >
              Edit
            </button>
            <button
              className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => {
                console.log('Delete clicked');
                setIsMenuOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Task Title */}
      <h2 className="text-[22px] font-bold text-black pr-12 leading-tight mb-5">
        {title}
      </h2>

      {/* Conditional Image Section */}
      {image && (
        <div className="mb-5 rounded-[1.25rem] overflow-hidden w-full h-[180px] shrink-0">
          <img
            src={image}
            alt="Task thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Task Description */}
      <p className="text-[#6c6c6c] text-[17px] leading-relaxed mb-8 font-normal">
        {description}
      </p>

      {/* Footer: Priority and Date */}
      <div className="flex justify-between items-end mt-auto pt-2">
        <span
          className={`text-lg font-medium capitalize ${getPriorityTextColor(
            priority
          )}`}
        >
          {priority}
        </span>
        {createdDate && (
          <span className="text-[#9ca3af] text-[15px]">
            Created on: {createdDate}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;