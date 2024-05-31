import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string; 
  altText?: string; 
}

const HomeCard1: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  altText = "Descriptive image"
}) => {
  const containerClasses = `flex flex-col xl:flex-row bg-white shadow-lg rounded-lg overflow-hidden py-20 h-full justify-end`;

  return (
    <div className="flex flex-col xl:flex-row bg-white shadow-lg rounded-lg overflow-hidden py-20 h-full">
      <div className="w-full h-64 xl:w-7/12 xl:h-auto">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
        />
      </div>
      <div className="w-full p-6 flex flex-col justify-between xl:w-5/12">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-black">{title}</h2>
          <p className="text-black text-lg md:text-lg lg:text-xl xl:text-xl mt-8 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard1;
