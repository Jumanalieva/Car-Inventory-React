import React from 'react';

interface HomeCard2Props {
  imageUrlLeft: string;
  imageUrlRight: string;
  altTextLeft?: string;
  altTextRight?: string;
}

const HomeCard2: React.FC<HomeCard2Props> = ({
  imageUrlLeft,
  imageUrlRight,
  altTextLeft = "Left image",
  altTextRight = "Right image"
}) => {
  return (
    <div className="flex flex-row items-center bg-black shadow-lg rounded-lg overflow-hidden m-4 mb-6">
      <div className="w-1/2 h-full">
        <img
          src={imageUrlLeft}
          alt={altTextLeft}
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
        />
      </div>
      <div className="w-1/2 h-full">
        <img
          src={imageUrlRight}
          alt={altTextRight}
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
        />
      </div>
    </div>
  );
};

export default HomeCard2;
