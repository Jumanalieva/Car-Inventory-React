import React, { useState } from 'react';

interface DropdownOption {
  label: string;
  value: string;
  price: string;
}

interface CardProps {
  index: number;
  imageUrl: string;
  title: string;
  description: string;
  additionalText: string;
  pageName: string;
  dropdownOptions: DropdownOption[];
  altText?: string;
}

const VehicleCard1: React.FC<CardProps> = ({
  index,
  imageUrl,
  title,
  description,
  additionalText,
  pageName,
  dropdownOptions,
  altText = "Descriptive image"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageOnLeft = index % 2 === 0;
  const containerClasses = `flex flex-col md:flex-row ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-white shadow-lg rounded-lg overflow-hidden py-6 px-4`;

  return (
    <div className={containerClasses}>
      <div className="w-full md:w-1/2 h-full">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
        />
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between relative">
        <div className="relative inline-block text-left mb-14 self-end">
          <button
            type="button"
            className="inline-flex justify-center rounded-md px-4 py-2 bg-white text-lg font-medium text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {pageName}
            <svg className="-mr-1 ml-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                {dropdownOptions.map((option, idx) => (
                  <div key={idx} className="flex justify-between px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
                    <a href={option.value} className="block">{option.label}</a>
                    <span>{option.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-slate-600">{title}</h2>
          <p className="text-black text-lg md:text-lg lg:text-xl xl:text-2xl mt-8 mb-5">{description}</p>
          <p className="text-gray-700 text-lg md:text-lg lg:text-xl xl:text-2xl mb-8">{additionalText}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard1;
