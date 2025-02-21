// Frontend: React (TSX) with Axios
import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState('');

    const handleFetch = async () => {
        try {
            const response = await axios.get('https://c1c1-197-248-21-245.ngrok-free.app/');
            // const response = await axios.get('http://moviesbackend-production-e4a9.up.railway.app');

            console.log('Response data:', response.data);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error fetching:', error);
            setMessage('Failed to fetch');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">CORS Test with Axios</h1>
            <button onClick={handleFetch} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Fetch Messageg
            </button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default App;
