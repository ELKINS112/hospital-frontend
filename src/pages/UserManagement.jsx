
import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../services/userService';
import AddUserForm from './AddUserForm';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    getAllUsers().then(data => setUsers(data));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id).then(() => loadUsers());
    }
  };

  return (
    <div>
      <h2>Admin User Management</h2>
      <AddUserForm onUserAdded={loadUsers} />
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.full_name} - {user.email} ({user.role})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
