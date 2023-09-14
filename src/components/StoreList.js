import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import storesData from '../data/storesData'; // Import your mock data
import { Table, Button, Container } from 'react-bootstrap';
import AddStore from './AddStore';
import EditStore from './EditStore';
import DeleteConfirmation from './DeleteConfirmation';

function StoreList() {
  // Initialize storesData state
  const [storesDataState, setStoresDataState] = useState(storesData);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  

  // Function to add a new store to the state
  const handleAddStore = (newStore) => {
    setStoresDataState([...storesDataState, newStore]);
  };

// Function to handle editing a store
  const handleEditStore = (updatedStore) => {
    const updatedStoresData = storesDataState.map((store) => {
      if (store.id === updatedStore.id) {
        return updatedStore;
      }
      return store;
    });

    // Update the state with the edited store
    setStoresDataState(updatedStoresData);
  };

  const handleDeleteStore = (storeToDelete) => {
    // Show the delete confirmation dialog
    setDeleteConfirmation(storeToDelete);
  };

  const confirmDelete = () => {
    // Remove the store from the state
    setStoresDataState((prevStores) =>
      prevStores.filter((store) => store.id !== deleteConfirmation.id)
    );

    // Close the delete confirmation dialog
    setDeleteConfirmation(null);
  };

  const cancelDelete = () => {
    // Close the delete confirmation dialog
    setDeleteConfirmation(null);
  };

  return (
    <>
      <Container>
        <h1 className="NavbarBrand-text text-center p-3">Admin Dashboard</h1>
        <div className="row">
          <div className="col-sm-1 col-md-1 text-center">
            <h2>Stores</h2>
          </div>

          <div className="col-sm-1 col-md-1 offset-md-10 offset-sm-10 text-center">
            <AddStore onAddStore={handleAddStore} />
          </div>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="text-center">Store ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Description</th>
              <th className="text-center">Address</th>
              <th className="text-center">Contact Details</th>
              <th className="text-center">Store Hours</th>
              <th className="text-center">Website</th>
              <th className="text-center">Logo | Image</th>
              <th className="text-center">Category</th>
              <th className="text-center">Tags</th>
              <th colSpan={3} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {storesDataState.map((store) => (
              <tr key={store.id}>
                <td>{store.id}</td>
                <td>{store.name}</td>
                <td>{store.description}</td>
                <td>{store.address}</td>
                <td>
                  {store.contact.map((contact) => (
                    <ul key={contact.contactId}>
                      <>
                        <li>
                          Mobile No: {contact.mobileNo}
                        </li>
                        <li>
                          Telephone No: {contact.telephoneNo}
                        </li>
                        <li>
                          Email: {contact.email}
                        </li>
                      </>
                    </ul>
                  ))}
                </td>
                <td>{store.storeHours}</td>
                <td>{store.website}</td>
                <td> {store.logo}</td>
                <td>{store.category}</td>
                <td> {store.tags}</td>
                <td>
                <EditStore storeToEdit={store} onEditStore={handleEditStore} />
                </td>
                <td>
                  <Button variant="warning" size="sm"> Archive
                  </Button>
                </td>
                <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteStore(store)} // Handle delete button click
                >
                  Delete
                </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {deleteConfirmation && (
        <DeleteConfirmation
          show={!!deleteConfirmation}
          onDelete={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      </Container>
    </>
  );
}

export default StoreList;
