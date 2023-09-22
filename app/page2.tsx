import React, { useState } from 'react';

export default function Home() {

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    last_name: '',
    user_type: '',
    password: '',
    status: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    callAPI('https://evergreen-adm.azurewebsites.net/users', 'POST', formData);
  };

  const handleGetAllUsers = () => {
    callAPI('https://evergreen-adm.azurewebsites.net/users', 'GET', null);
  };

  const handleGetUserById = () => {
    callAPI('https://evergreen-adm.azurewebsites.net/users/1', 'GET', null);
  };

  const callAPI = async (url:any, method:any, body:any) => {
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="last_name" 
            value={formData.last_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>User Type:</label>
          <input 
            type="text" 
            name="user_type" 
            value={formData.user_type} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Status:</label>
          <input 
            type="text" 
            name="status" 
            value={formData.status} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Create User</button>
      </form>

      <div>
        <button onClick={handleGetAllUsers}>Get all Users</button>
        <button onClick={handleGetUserById}>Get User by Id</button>
      </div>

      <div>
        {response && (
          <pre>
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
    </div>
    
  );
}