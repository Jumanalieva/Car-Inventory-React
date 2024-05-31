import React from 'react';
import AppointmentForm from './AppointmentForm';

interface ModalProps {
  id?: string;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  if (!props.open) return null;

  return (
    <div 
      onClick={props.onClose} 
      className='fixed w-full h-full flex overflow-auto z-50 justify-center items-center bg-black bg-opacity-50'
    >
      <div
        className='w-full max-w-xl bg-white shadow-xl rounded p-4 overflow-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col">
          <AppointmentForm id={props.id} onClose={props.onClose} /> {/* Pass the onClose prop */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
