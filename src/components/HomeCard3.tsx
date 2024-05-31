import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  index: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonUrl: string;
  pageName: string;
  altText?: string;
}

const HomeCard3: React.FC<CardProps> = ({
  index,
  imageUrl,
  title,
  description,
  buttonUrl,
  pageName,
  altText = "Descriptive image"
}) => {
  const imageOnLeft = index % 2 === 0;
  const containerClasses = `flex flex-col md:flex-row ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-white shadow-lg rounded-lg overflow-hidden  py-6 px-4`;

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
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl  text-slate-600">{title}</h2>
          <p className="text-black text-lg md:text-lg lg:text-xl xl:text-2xl mt-8 mb-8">{description}</p>
        </div>
        <Link
          to={buttonUrl}
          className="self-start mt-4 text-slate-600 text-lg md:text-lg lg:text-xl xl:text-2xl px-5 py-1  bg-white border-2 border-gray-400 rounded-full m-5 hover:bg-black hover:text-white"
        >
          {pageName}
        </Link>
      </div>
    </div>
  );
};

export default HomeCard3;
