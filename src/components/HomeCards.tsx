import React from 'react';
import HomeCard3 from '../components/HomeCard3';
import image1 from '../assets/images/models2.jpeg';
import image2 from '../assets/images/model1.jpeg';
import image3 from '../assets/images/group.jpeg';

import HomeCard2 from '../components/HomeCard2';
import imageOne from '../assets/images/mb-car.jpeg';
import imageTwo from '../assets/images/mb-logo.jpeg';
import HomeCard1 from '../components/HomeCard1'; // Correct import for ServiceCard2

const HomeCards: React.FC = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: image1,
      title: "THE CRAFTED MASTERPIECE",
      description: "Each Mercedes model delivers unparalleled driving experience and timeless style. Discover our latest collections today.",
      buttonUrl: "/vehicles",
      pageName: "Learn More"
    },
    {
      id: 2,
      imageUrl: image2,
      title: "DRIVE WITH CONFIDENCE",
      description: "We provide comprehensive services and support to keep you on the road.",
      buttonUrl: "/services",
      pageName: "Learn More",
      imageOnRight: true
    }
  ];

  return (
    <div>
      <HomeCard2
        imageUrlLeft={imageOne}
        imageUrlRight={imageTwo}
        altTextLeft="Left image description"
        altTextRight="Right image description"
      />
      <h2 className="bg-black py-6 text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 rounded">
        Elegant design | Advanced technology | Superior performance
      </h2>
      {cardData.map((card, index) => (
        <HomeCard3
          key={card.id}
          index={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          buttonUrl={card.buttonUrl}
          pageName={card.pageName}
        />
      ))}
      <HomeCard1
        title="MEET OUR TEAM"
        description="From our visionary engineers and designers to our meticulous craftspeople and customer service experts, we work together to deliver the best driving experience. Join us on a journey of sophistication and advanced technology, as we continue to shape the future of the automotive world."
        imageUrl={image3}
      />
    </div>
  );
};

export default HomeCards;
