const token = 'bb06ca0390141d1a803413d5f181b783cb5178171be05d03';

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://car-flask.onrender.com/api/user_appointment`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server');
        }

        return await response.json();
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-flask.onrender.com/api/user_appointment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server');
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://car-flask.onrender.com/api/user_appointment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on the server');
        }

        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-flask.onrender.com/api/user_appointment/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server');
        }

        return;
    },
}
