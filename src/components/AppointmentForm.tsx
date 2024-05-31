import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAppointment, updateAppointment } from '../redux/slices/RootSlice';
import { server_calls } from "../api/server";
import Button from './Button';
import Input from './Input';

interface AppointmentFormProps {
  id?: string;
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ id, onClose }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    const appointmentData = {
      ...data,
      appointment_date: data.appointment_date,
    };

    try {
      if (id) {
        await server_calls.update(id, appointmentData);
        dispatch(updateAppointment({ ...appointmentData, id }));
      } else {
        const newAppointment = { id: (Math.random() * 100000).toFixed(0), ...appointmentData };
        await server_calls.create(newAppointment);
        dispatch(addAppointment(newAppointment));
      }
      onClose();
    } catch (error) {
      console.error("Error saving appointment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl mx-auto p-8 bg-white rounded shadow">
      <p className="text-center text-xl xl:text-2xl text-red-700 mb-4">Refresh page after submitting</p>
      <div>
        <Input {...register('first_name')} name='first_name' placeholder="First Name" />
      </div>
      <div>
        <Input {...register('last_name')} name='last_name' placeholder="Last Name" />
      </div>
      <div>
        <Input {...register('email')} name='email' placeholder="Email" />
      </div>
      <div>
        <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
      </div>
      <div>
        <Input {...register('vehicle_type')} name='vehicle_type' placeholder="Vehicle Type" />
      </div>
      <div>
        <Input {...register('additional_notes')} name='additional_notes' placeholder="Additional Notes" />
      </div>
      <div>
        <Input {...register('appointment_date')} name='appointment_date' placeholder="Appointment Date (ex: 2024-12-31 14:20)" />
      </div>
      <div className="flex justify-between p-1 mt-4">
        <button type="submit" className="px-5 py-2 font-semibold text-white bg-black border-2 border-blue-600 rounded-full m-5 hover:bg-blue-600 hover:text-white">
          Submit
        </button>
        <Button className="px-5 py-2 font-semibold text-white bg-black border-2 border-blue-600 rounded-full m-5 hover:bg-blue-600 hover:text-white" onClick={onClose}>
          Exit
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
