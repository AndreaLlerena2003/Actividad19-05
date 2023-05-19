import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);
  

  return (
    <div className="App">
      <h1>Tabla de Usuarios Aleatorios</h1>
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Foto</th>
            <th>Nombre completo</th>
            <th>Correo</th>
            <th>Género</th>
            <th>Celular</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Calle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.login.uuid}>
              <td>{index + 1}</td>
              <td>
                <img src={user.picture.thumbnail} alt="User" />
              </td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.cell}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
              <td>{`${user.location.street.name} ${user.location.street.number}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
