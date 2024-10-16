// src/context/DataContext.js
import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
import axios from 'axios'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from backend
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/products'); // Adjust URL as needed
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Post data to backend
    const postData = async (newData) => {
        try {
            await axios.post('/api/data', newData); // Adjust URL as needed
            fetchData(); // Refresh data after posting
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);




    // post data of users
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/users', { name, email });
        console.log(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
    

    return (
        <DataContext.Provider value={{ data, loading, error, postData, name, setName, email, setEmail, handleSubmit }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
