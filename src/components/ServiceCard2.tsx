import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  index: number;
  title: string;
  description: string;
  buttonUrl: string;
  pageName: string;
  imageUrl: string; 
  altText?: string; 
}

const ServiceCard2: React.FC<CardProps> = ({
  index,
  title,
  description,
  buttonUrl,
  pageName,
  imageUrl,
  altText = "Descriptive image"
}) => {
  const containerClasses = `flex flex-col xl:flex-row bg-white shadow-lg rounded-lg overflow-hidden py-20 h-full justify-end`;

  return (
    <div className={containerClasses}>
      {index % 2 !== 0 ? (
        <>
          <div className="w-full xl:w-7/12 h-64 xl:h-auto">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
            />
          </div>
          <div className="w-full xl:w-5/12 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-black">{title}</h2>
              <p className="text-black text-lg md:text-lg lg:text-xl xl:text-xl mt-8 mb-4">{description}</p>
            </div>
            <Link
              to={buttonUrl}
              className="self-start mt-4 text-white text-lg md:text-lg lg:text-xl xl:text-2xl px-5 py-1 bg-black border-2 border-gray-700 rounded-full m-5 hover:bg-slate-600 hover:text-white"
            >
              {pageName}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-full xl:w-5/12 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-black">{title}</h2>
              <p className="text-black text-lg md:text-lg lg:text-xl xl:text-xl mt-8 mb-4">{description}</p>
            </div>
            <Link
              to={buttonUrl}
              className="self-start mt-1 mb-1 text-white text-lg md:text-lg lg:text-xl xl:text-2xl px-5 py-1 bg-black border-2 border-gray-700 rounded-full m-5 hover:bg-slate-600 hover:text-white"
            >
              {pageName}
            </Link>
          </div>
          <div className="w-full xl:w-7/12 h-64 xl:h-auto">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard2;
