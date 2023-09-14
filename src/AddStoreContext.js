import React, { createContext, useContext, useState } from 'react';

const AddStoreContext = createContext();

export function useAddStoreContext() {
  const context = useContext(AddStoreContext);
  if (!context) {
    throw new Error('useAddStoreContext must be used within an AddStoreProvider');
  }
  return context;
}

export function AddStoreProvider({ children }) {
  const [stores, setStores] = useState([]);

  const onAdd = (newStore) => {
    setStores((prevStores) => [...prevStores, newStore]);
  };

  return (
    <AddStoreContext.Provider value={{ stores, onAdd }}>
      {children}
    </AddStoreContext.Provider>
  );
}
