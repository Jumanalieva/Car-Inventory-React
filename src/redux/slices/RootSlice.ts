import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  vehicle_type: string;
  additional_notes?: string;
  appointment_date: string;
}

interface RootState {
  appointments: Appointment[];
}

const initialState: RootState = {
  appointments: [],
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    updateAppointment: (state, action: PayloadAction<Appointment>) => {
      const index = state.appointments.findIndex(app => app.id === action.payload.id);
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    deleteAppointment: (state, action: PayloadAction<{ id: string }>) => {
      state.appointments = state.appointments.filter(app => app.id !== action.payload.id);
    },
  },
});

export const { addAppointment, updateAppointment, deleteAppointment } = rootSlice.actions;
export const reducer = rootSlice.reducer;
