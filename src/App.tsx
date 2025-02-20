import { useState } from 'react';

const App = () => {
    const [message, setMessage] = useState('');

    const handleFetch = async () => {
        try {
            const response = await fetch('https://cors.rf.gd/index.php', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log('Response data:', data);
            setMessage(data.message);
        } catch (error) {
            console.error('Error fetching:', error);
            setMessage('Failed to fetch');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">CORS Test</h1>
            <button onClick={handleFetch} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Fetch Message from back end</button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default App;
