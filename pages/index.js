import { useState } from 'react';
import  '../styles/styles.css';

export default function People() {
  const peopleData = require('../public/people.json');

  const [people] = useState(peopleData);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showNumbers, setShowNumbers] = useState({});

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };
  const handleCloseClick = () => {
    setSelectedPerson(null);
  };
  const handleShowClick = (personId) => {
    setShowNumbers(prevState => ({
      ...prevState,
      [personId]: !prevState[personId]
    }));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={person.id}>
              <td>{index + 1}</td>
              <td>
                <a onClick={() => handlePersonClick(person)}>
                  {person.name}
                </a>
              </td>
              <td>
                <button onClick={() => handleShowClick(person.id)}>
                  {showNumbers[person.id] ? person.phoneNumber : 'Show Number'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPerson && (
        <div className='dropdown'>
          <button className='closebutton' onClick={handleCloseClick}>
            X
          </button>
          <h2>{selectedPerson.name}</h2>
          <p>{selectedPerson.address}</p>
          <p>{selectedPerson.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}
