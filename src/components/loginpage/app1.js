// api.js

const BASE_URL = 'http://localhost:8000/api/';

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
