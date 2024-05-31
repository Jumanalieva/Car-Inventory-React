import { useEffect, useState } from 'react';
import { server_calls } from '../api/server';

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

export const useGetData = () => {
    const [appointmentData, setAppointmentData] = useState<Appointment[]>([]);

    const getData = async () => {
        try {
            const result = await server_calls.get();
            setAppointmentData(result);
        } catch (error: unknown) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { appointmentData, getData };
};
