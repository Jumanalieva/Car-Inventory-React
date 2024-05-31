import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { useGetData } from '../custom_hooks/FetchData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { format } from 'date-fns';

interface AppointmentData {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    vehicle_type: string;
    additional_notes?: string; 
    appointment_date: string;
}

const DataTable: React.FC = () => {
    const { appointmentData, getData } = useGetData();
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

    const handleOpen = (id: string) => {
        setSelectedId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedId(undefined);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        if (event.target.checked) {
            setSelectedId(id);
        } else {
            setSelectedId(undefined);
        }
    };

    const deleteData = async () => {
        if (selectedId) {
            await server_calls.delete(selectedId);
            getData();
        }
    };

    const formatDateTime = (dateTime: string) => {
        return format(new Date(dateTime), 'MMMM d, yyyy h:mm a');
    };

    return (
        <>
            <Modal
                id={selectedId}
                open={open}
                onClose={handleClose}
            />

            <div className="container text-center mx-auto p-8 space-y-2">
                <h2 className="p-6 my-5 text-center text-stone-800 text-4xl rounded">MY APPOINTMENTS</h2>
                <Button onClick={() => handleOpen('')} className="px-5 py-2 font-semibold bg-black text-white border-2 border-gray-200 rounded-full m-5 hover:bg-blue-600 hover:text-white">SCHEDULE AN APPOINTMENT</Button>
                <Button onClick={() => handleOpen(selectedId || '')} className="px-5 py-2 font-semibold bg-black text-white border-2 border-gray-200 rounded-full m-5 hover:bg-blue-600 hover:text-white">UPDATE</Button>
                <Button onClick={deleteData} className="px-5 py-2 font-semibold bg-black text-white border-2 border-gray-200 rounded-full m-5 hover:bg-blue-600 hover:text-white">DELETE</Button>
            </div>
            <div className="container mx-10 my-4 p-4">
                <Grid container spacing={4}>
                    {appointmentData.map((appointment: AppointmentData) => (
                        <Grid item xs={12} sm={12} md={6} key={appointment.id}>
                            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedId === appointment.id}
                                                onChange={(e) => handleCheckboxChange(e, appointment.id)}
                                                name="selectAppointment"
                                                sx={{ transform: 'scale(1.5)' }}
                                            />
                                        }
                                        label=""
                                    />
                                </div>
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.40rem' }}>
                                        <small className='text-blue-500 text-lg lg:text-xl xl:text-xl'>Name: </small>{appointment.first_name} {appointment.last_name}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.20rem' }}>
                                        <small className='text-blue-600 text-lg lg:text-xl xl:text-xl'>Email: </small>{appointment.email}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.20rem' }}>
                                        <small className='text-blue-600 text-lg lg:text-xl xl:text-xl'>Phone: </small>{appointment.phone_number}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.20rem' }}>
                                        <small className='text-blue-600 text-lg lg:text-xl xl:text-xl'>Vehicle Type: </small>{appointment.vehicle_type}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.20rem' }}>
                                        <small className='text-blue-600 text-lg lg:text-xl xl:text-xl'>Notes: </small>{appointment.additional_notes || 'No notes'}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" style={{ fontSize: '1.20rem' }}>
                                        <small className='text-blue-600 text-lg lg:text-xl xl:text-xl'>Appointment Date:</small> {formatDateTime(appointment.appointment_date)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default DataTable;
