import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Initialize navigate hook
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: ""
  });

  // Fetch contact details
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/contacts/${id}`);
        setContact(response.data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };
    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.put(`http://localhost:3000/api/v1/contacts/${id}`, contact);
        console.log("Successfully updated contact:", response.data);
    } catch (error) {
        console.error("Error updating contact:", error);
        console.error("Backend response:", error.response);  // Log the full response for debugging
    }
};

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Edit Contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Company"
          name="company"
          value={contact.company}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Save Changes
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          sx={{ marginTop: 2 }}
          onClick={() => navigate("/")} // Navigate to the contact list page
        >
          View Contact List
        </Button>
      </form>
    </Container>
  );
};

export default EditContact;
