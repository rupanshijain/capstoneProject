import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', description: '' });
  const [editingService, setEditingService] = useState(null);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/user/profile', {
          headers: {
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        window.location.href = '/login';
      }
    };

    fetchUserData();
    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      const response = await fetch('http://localhost:5000/services/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newService),
      });

      if (!response.ok) {
        throw new Error('Failed to add service');
      }

      const addedService = await response.json();
      setServices([...services, addedService]);
      fetchServices();
      setNewService({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleUpdateService = async (service) => {
    try {
      const response = await fetch(`http://localhost:5000/services/${service._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
      });

      if (!response.ok) {
        throw new Error('Failed to update service');
      }

      const updatedService = await response.json();
      setServices(services.map((s) => (s._id === updatedService._id ? updatedService : s)));
      fetchServices();
      setEditingService(null);
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      const response = await fetch(`http://localhost:5000/services/${serviceId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete service');
      }

      setServices(services.filter((service) => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {userData ? (
        <div>
          <p>Welcome, {userData.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="service-container">
        <div className="add-service">
          <h3>Add New Service</h3>
          <input
            type="text"
            placeholder="Service Title"
            value={newService.title}
            onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Service Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          />
          <button onClick={handleAddService}>Add Service</button>
        </div>

        <div className="service-list">
          <h3>Services</h3>
          <ul>
            {services.map((service) => (
              <li
                key={service._id}
                className={editingService && editingService._id === service._id ? 'editing' : ''}
              >
                {editingService && editingService._id === service._id ? (
                  <div>
                    <input
                      type="text"
                      value={editingService.title}
                      onChange={(e) =>
                        setEditingService({ ...editingService, title: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      value={editingService.description}
                      onChange={(e) =>
                        setEditingService({ ...editingService, description: e.target.value })
                      }
                    />
                    <div className="buttonList">
                      <button
                        className="save-button"
                        onClick={() => handleUpdateService(editingService)}
                      >
                        Save
                      </button>
                      <button
                        className="cancel-button"
                        onClick={() => setEditingService(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <p>{service.title}</p>
                      <p>{service.description}</p>
                    </div>
                    <div className="buttonList">
                      <button
                        className="edit-button"
                        onClick={() => setEditingService(service)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteService(service._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
