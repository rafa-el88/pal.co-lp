// API URLs for different environments
const LOCAL_API_URL = 'http://localhost:6005/api';
const PROD_API_URL = 'https://palcorest-eddpahbmb2hub8hb.centralus-01.azurewebsites.net/api';

// Check if we're running locally or on production
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_URL = isLocalhost ? LOCAL_API_URL : PROD_API_URL;

console.log(`Running in ${isLocalhost ? 'LOCAL' : 'PRODUCTION'} environment`);
console.log('API URL:', API_URL);

async function saveData(data) {
    try {
        if (!data) {
            throw new Error('Dados não fornecidos');
        }

        console.log('Enviando dados:', data);

        const response = await fetch(`${API_URL}/waitingListAccount`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseText = await response.text();
        console.log('Resposta do servidor:', responseText);

        const responseData = responseText ? JSON.parse(responseText) : null;

        if (!response.ok) {
            // Se for erro de validação (400)
            if (response.status === 400) {
                if (responseData?.errors) {
                    // Erros de validação do modelo
                    const errorMessages = responseData.errors
                        .map(error => error.message)
                        .join('\n');
                    throw new Error(errorMessages);
                } else if (responseData?.duplicateData) {
                    // Dados duplicados
                    const { field, name } = responseData.duplicateData;
                    throw new Error(`${field} já cadastrado para ${name}. Por favor, utilize outro ${field.toLowerCase()}.`);
                } else if (responseData?.message) {
                    // Mensagem de erro geral
                    throw new Error(responseData.message);
                }
            }
            throw new Error(`Erro do servidor: ${response.status}`);
        }

        return responseData;
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        throw error;
    }
}

window.saveData = saveData;
export { saveData };

