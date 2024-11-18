import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(err => console.log(err)); 
  }

  render() {
    return (
      <div style={{ 
        background: 'linear-gradient(to right, #4CAF50, #2196F3)', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column', 
        padding: '20px',
        color: 'black', 
      }}>
        <h1>User List</h1> 
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
        }}>
          {this.state.persons.map(person => (
            <div key={person.login.uuid} style={{
              marginBottom: '20px',
              border: '1px solid #ddd',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '800px', 
            }}>
              
              <img 
                src={person.picture.medium} 
                alt={`${person.name.first} ${person.name.last}`} 
                style={{
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  marginRight: '20px'
                }} 
              />
              <div>
                <h2>{person.name.first} {person.name.last} - {person.login.uuid}</h2>
                <p><strong>User Name:</strong> {person.login.username}</p>
                <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                <p><strong>Birth Date and Age:</strong> {person.dob.date} ({person.dob.age})</p>
                <p><strong>Email:</strong> {person.email}</p>
                <p><strong>Register Date:</strong> {person.registered.date}</p>
                <p><strong>Phone:</strong> {person.phone}</p>
                <p><strong>Cell:</strong> {person.cell}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
