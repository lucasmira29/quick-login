const API_URL = 'https://quick-login.onrender.com';

export async function postUser(endpoint, data) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData.message;
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(username) {
  try {
    const response = await fetch(`${API_URL}/${username}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData.message;
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

const api = {
  postUser,
  deleteUser,
};

export default api;
