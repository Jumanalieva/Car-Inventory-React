import React from 'react';
import HomeCard2 from '../components/HomeCard2';
import imageOne from '../assets/images/v-logo0.jpeg';
import imageTwo from '../assets/images/v-2.jpeg';
import VehicleCard1 from '../components/VehicleCard1';
import image1 from '../assets/images/suv3.jpeg';
import image2 from '../assets/images/suv-2.jpeg';
import image3 from '../assets/images/GLS.jpeg';
import image4 from '../assets/images/sedan-1.jpeg';
import image5 from '../assets/images/convertible.jpeg'

const VehiclesComp: React.FC = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: image1,
      title: "G-Class SUV",
      description: "Starting at $143,000",
      additionalText: "Off-Road Icon",
      pageName: "View Other Models",
      dropdownOptions: [
        { label: "AMG G 63 SUV", value: "/g550", price: "$180,000" },
        { label: "G 550 SUV", value: "/amg-g63", price: "$143,000" }
      ]
    },
    {
      id: 2,
      imageUrl: image2,
      title: "Mercedes-Maybach GLS SUV",
      description: "Starting at $174,000",
      additionalText: "Height of Luxury",
      pageName: "View Other Models",
      dropdownOptions: [
        { label: "Mercedes-Maybach GLS 600 SUV", value: "/service1", price: "$174,350"},
        { label: "Mercedes-Maybach EQS 680 SUV ", value: "/service2", price: "$179,000"}
      ],
      imageOnRight: true
    },
    {
      id: 3,
      imageUrl: image3,
      title: "GLS SUV",
      description: "Starting at $87,000",
      additionalText: "Full-Size Luxury",
      pageName: "View Other Models",
      dropdownOptions: [
        { label: "GLS 450 4MATIC SUV", value: "/activity1", price: "$87,000" },
        { label: "GLS 580 4MATIC SUV", value: "/activity2", price: "$112,000" },
        { label: "AMG GLS 4MATIC+ SUV", value: "/activity3", price: "$145,000" }
      ]
    },
    {
        id: 4,
        imageUrl: image4,
        title: "S-Class Sedan",
        description: "Starting at $117,000",
        additionalText: "Luxury Standard",
        pageName: "View Other Models",
        dropdownOptions: [
          { label: "S 500 4MATIC Sedan", value: "/activity1", price: "$117,000" },
          { label: "S 580e 4MATIC Sedan", value: "/activity2", price: "$127,000" },
          { label: "S 580 4MATIC Sedan", value: "/activity3", price: "$128,000" }
        ]
      },
      {
        id: 5,
        imageUrl: image5,
        title: "Convertibles: SL Roadster",
        description: "Starting at $111,000",
        additionalText: "Legendary",
        pageName: "View Other Models",
        dropdownOptions: [
          { label: "AMG SL 43 Roadster", value: "/activity1", price: "$117,000" },
          { label: "AMG SL 55 Roadster", value: "/activity2", price: "$144,000" },
          { label: "AMG SL 63 Roadster", value: "/activity3", price: "$187,000" }
        ]
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
      <h2 className="bg-white py-6 text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 rounded">
        AVAILABLE VEHICLES
      </h2>
      {cardData.map((card, index) => (
        <VehicleCard1
          key={card.id}
          index={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          additionalText={card.additionalText}
          pageName={card.pageName}
          dropdownOptions={card.dropdownOptions}
        />
      ))}
    </div>
  );
};

export default VehiclesComp;
