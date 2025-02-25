const API_URL = 'http://localhost:6005/api';

async function saveData(data) {
  console.log('Data to save:', data);
    try {
        const response = await fetch(`${API_URL}/waitingListAccount`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        throw error;
    }
}

// export { saveData };

