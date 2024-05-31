import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string; 
    altText?: string;
}

const TeamImage: React.FC<CardProps> = ({
    imageUrl,
    title,
    description, 
    altText = "Descriptive image"
}) => {
    return (
        <div className="relative bg-stone-200 shadow-lg rounded-lg overflow-hidden mt-8 ">
            <div className="relative w-full h-64">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'default_image.png')}
                />
                <div className="absolute inset-0 flex flex-col justify-start p-6 bg-black bg-opacity-20">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl text-white mb-2">{title}</h2>
                    <p className="text-lg lg:text-xl xl:text-2xl text-white">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamImage;
