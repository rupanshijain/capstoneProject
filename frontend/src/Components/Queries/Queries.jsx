import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Queries.css';

const Queries = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:5000/contact/formData');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleUpdateFlag = async (contactId, currentFlag) => {
    try {
      const newFlag = currentFlag === 0 ? 1 : 0;
      const response = await fetch(`http://localhost:5000/contact/${contactId}/flag`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flag: newFlag }),
      });

      if (!response.ok) {
        throw new Error('Failed to update flag');
      }

      const updatedContact = await response.json();
      setContacts(contacts.map(contact => contact._id === updatedContact._id ? updatedContact : contact));
    } catch (error) {
      console.error('Error updating flag:', error);
    }
  };

  return (
    <div className="queries">
      <button
          className="back-button"
          onClick={() => navigate('/admin/dashboard')} 
        >
          Back
        </button>
      <h2>Queries</h2>
      <div className="query-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <label>
                <input
                  type="checkbox"
                  checked={contact.flag === 1}
                  onChange={() => handleUpdateFlag(contact._id, contact.flag)}
                />
                Taken Care Of
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Queries;
