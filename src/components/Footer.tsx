import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo3.jpeg'

const Footer: React.FC = () => {
  return (
    <footer className=" bg-white p-10 text-stone-900">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-10">
          <div className="w-48 h-42 overflow-hidden border-2 border-white">
            {/* Placeholder for a photo */}
            <img src={ image } alt="Profile" className="w-full h-full object-cover"/>
          </div>
          <div className="p-4">
      <h2 className="text-2xl text-red-700 xl:text-2xl mb-4">Follow Us On Social Media</h2>
      <p className="flex items-center xl:text-xl">
        <a href="mailto:seniorhub24@gmail.com" className="flex items-center hover:text-blue-600 transition-colors duration-300">
          <i className="fas fa-envelope mr-2"></i>mercedesbenzofavon@gmail.com
        </a>
      </p>
      <p className="flex items-center xl:text-xl">
        <a href="https://www.youtube.com/channel/UCxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-red-700 transition-colors duration-300">
          <i className="fab fa-youtube mr-2"></i>Follow our Channel
        </a>
      </p>
      <p className="flex items-center xl:text-xl">
        <a href="https://www.instagram.com/seniorhub" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-600 transition-colors duration-300">
          <i className="fab fa-instagram mr-2"></i>@mercedesbenzofavon
        </a>
      </p>
      <p className="flex items-center xl:text-xl">
        <a href="tel:706-555-4448" className="flex items-center hover:text-green-600 transition-colors duration-300">
          <i className="fas fa-phone mr-2"></i>1234567890
        </a>
      </p>
    </div>
        <div>
          <h2 className="text-2xl text-red-700 xl:text-2xl  mb-3">Mercedes-Benz of Avon is at: </h2>
          <Link to="/home" className="block xl:text-xl hover:underline">123 Strawberry Road, Kent Connecticut 06020</Link>

        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
         
