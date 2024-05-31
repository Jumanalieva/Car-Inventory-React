import React from 'react';

export type ServiceProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
