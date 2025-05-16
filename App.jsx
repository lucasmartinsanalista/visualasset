import React, { useState } from 'react';
import Login from './Login';
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <>
          <InventoryForm onAdd={item => setData([...data, item])} />
          <InventoryList data={data} />
        </>
      )}
    </div>
  );
}