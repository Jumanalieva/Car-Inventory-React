import React from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDateTimePickerInputProps {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
  selectedTime: string | null;
  handleTimeChange: (time: string | null) => void;
}

const CustomDateTimePickerInput: React.FC<CustomDateTimePickerInputProps> = ({
  selectedDate,
  handleDateChange,
  selectedTime,
  handleTimeChange,
}) => {
  return (
    <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={
          <div className="relative">
            <input
              value={selectedDate ? selectedDate.toLocaleDateString() + ' ' + selectedTime : ''}
              readOnly
              className="w-full p-2 border border-gray-300 rounded pr-10"
              placeholder="Appointment Date (ex: 2024-12-31 14:20)"
            />
            <FaCalendarAlt
              className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 cursor-pointer"
            />
          </div>
        }
      />
    </div>
  );
};

export default CustomDateTimePickerInput;
