async function saveFormData(formData) {
  const url = "http://localhost:6005/api/WaitingListAccount"; 

  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  };

  try {
    const response = await fetch(url, settings);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Success:", data);
    return data; // Return the response data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

