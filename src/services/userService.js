export async function loginUser(username, password) {
  const response = await fetch(
    "https://rajhans-erp.onrender.com/users/login",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    }
  );

  return await response.json();
}

// Change Password
export async function changePassword(username, password) {
  const response = await fetch(
    "https://rajhans-erp.onrender.com/users/password",
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    }
  );

  return await response.json();
}