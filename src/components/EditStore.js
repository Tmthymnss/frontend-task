import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function EditStore({ storeToEdit, onEditStore, onCancel }) {
  // States for form fields, similar to AddStore component
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [storeHours, setStoreHours] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [contact, setContact] = useState({
    mobileNo: '',
    telephoneNo: '',
    email: '',
  });

  // Function to open the modal
//   useEffect(() => {
//     // Open the modal when storeToEdit prop changes
//     if (storeToEdit) {
//       setShowModal(true);
//     } else {
//       // Close the modal when there's no storeToEdit
//       setShowModal(false);
//     }
//   }, [storeToEdit]);

const handleOpenModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Populate form fields with storeToEdit data
  useEffect(() => {
    if (storeToEdit) {
      setName(storeToEdit.name || '');
      setDescription(storeToEdit.description || '');
      setAddress(storeToEdit.address || '');
      setStoreHours(storeToEdit.storeHours || '');
      setWebsite(storeToEdit.website || '');
      setLogo(storeToEdit.logo || '');
      setCategory(storeToEdit.category || '');
      setTags(storeToEdit.tags ? storeToEdit.tags.join(', ') : '');

      // Populate contact information
      if (storeToEdit.contact && storeToEdit.contact.length > 0) {
        const storeContact = storeToEdit.contact[0];
        setContact({
          mobileNo: storeContact.mobileNo || '',
          telephoneNo: storeContact.telephoneNo || '',
          email: storeContact.email || '',
        });
      }
    }
  }, [storeToEdit]);

  // Function to handle the edit operation
  const handleEdit = (event) => {
    event.preventDefault();
    // Create an updated store object with the form data, including contact information
    const updatedStore = {
      id: storeToEdit.id,
      name: name,
      description: description,
      address: address,
      storeHours: storeHours,
      website: website,
      logo: logo,
      category: category,
      tags: tags.split(',').map((tag) => tag.trim()),
      contact: [
        {
          mobileNo: contact.mobileNo,
          telephoneNo: contact.telephoneNo,
          email: contact.email,
        },
      ],
    };
    Swal.fire({
        title: 'successfuly saved changes',
        icon: 'success'
    })
    onEditStore(updatedStore);
    closeModal();
  };

  return (
    <>
       <Button variant="primary" size="sm" onClick={handleOpenModal}>
        Edit
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Form onSubmit={(event) => handleEdit(event)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Store</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* Form fields (similar to AddStore component) */}
            <Form.Group className='form_field'>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                required
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                required
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Store Hours:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Store Hours"
                required
                value={storeHours}
                onChange={(event) => {
                  setStoreHours(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Website:</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Website URL"
                required
                value={website}
                onChange={(event) => {
                  setWebsite(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Logo | Image URL:</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Logo | Image URL"
                required
                value={logo}
                onChange={(event) => {
                  setLogo(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Category:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                required
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Tags (comma-separated):</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Tags"
                required
                value={tags}
                onChange={(event) => {
                  setTags(event.target.value);
                }}
              />
            </Form.Group>

            {/* Contact Information */}
            <Form.Group className='form_field'>
              <Form.Label>Mobile No. (use the following format 090xxxxxxxx):</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile No"
                required
                value={contact.mobileNo}
                onChange={(event) => {
                  setContact({ ...contact, mobileNo: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Telephone No:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Telephone No"
                required
                value={contact.telephoneNo}
                onChange={(event) => {
                  setContact({ ...contact, telephoneNo: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className='form_field'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                required
                value={contact.email}
                onChange={(event) => {
                  setContact({ ...contact, email: event.target.value });
                }}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
