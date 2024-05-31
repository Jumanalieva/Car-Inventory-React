import React from 'react';
import ServiceCard1 from '../components/ServiceCard1';
import ServiceCard2 from '../components/ServiceCard2';
import image1 from '../assets/images/service-bg.jpeg';
import image2 from '../assets/images/service-bg2.jpeg';
import image4 from '../assets/images/service-bg3.jpeg';
import image3 from '../assets/images/group.jpeg'

const ServiceComp: React.FC = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: image2,
      title: "Mercedes-Benz service and maintenance.",
      description: "When it comes to reliability and value retention for your Mercedes-Benz, your Mercedes-Benz Service partner is the first choice. We also offer service contracts so that you do not have to confront unexpected bills and can relax knowing that qualified experts are never far away; a comprehensive online offering for you and your vehicle is also included.",
      buttonUrl: "/dashboard",
      pageName: "Schedule your appointment"
    },
    {
      id: 2,
      imageUrl: image3,
      title: "Mercedes-Benz Service Contracts.",
      description: "Mercedes-Benz Service Contracts offer the right solution for every need and every budget, thus freeing you from additional workshop costs since, depending on your specific service contract, unexpected repairs, maintenance and wear parts are already covered. You then don't have to worry about workshop bills and your Mercedes-Benz is always in tip-top condition. With a service contract you get Mercedes-Benz quality every time – with the service of our specially trained workshop specialists and with Mercedes-Benz genuine parts.",
      buttonUrl: "/customer-care",
      pageName: "Get in Touch"
    },
    {
      id: 3,
      imageUrl: image4,
      title: "LEVEL UP your car know-how!",
      description: "LEVEL UP! is your hub for all relevant information about spare parts and services from Mercedes-Benz. Regardless of whether it is brakes, tyres or maintenance, we will take you to a new level in terms of car know-how.",
      buttonUrl: "/quality-assurance",
      pageName: "Service check-ups"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <ServiceCard1
        imageUrl={image1}
        title="Service & Maintenance"
        description="Safety and value retention for your Mercedes-Benz."
      />
      {cardData.map((card, index) => (
        <ServiceCard2
          key={card.id}
          index={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          buttonUrl={card.buttonUrl}
          pageName={card.pageName}
        />
      ))}
    </div>
  );
};

export default ServiceComp;
