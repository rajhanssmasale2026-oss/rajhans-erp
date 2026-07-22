const API_URL = "http://localhost:5000/settings";

// Get Business Information
export async function getBusinessInfo() {

  const response = await fetch(API_URL);

  return await response.json();

}

// Save Business Information
export async function saveBusinessInfo(data) {

  const response = await fetch(API_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),

  });

  return await response.json();

}