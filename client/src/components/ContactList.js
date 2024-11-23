import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { styled } from "@mui/material/styles";

const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '8px 24px',
  textTransform: 'none',
  fontSize: '1rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}));

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  // Handle deleting a contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id)); // Remove deleted contact from state
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <AddButton
        variant="contained"
        color="primary"
        component={Link}
        to="/add-contact"
        startIcon={<PersonAddIcon />}
      >
        Add New Contact
      </AddButton>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  {/* Delete Button */}
                  <IconButton color="secondary" onClick={() => handleDelete(contact._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                    <Link to={`/contacts/${contact._id}`}>
                        <IconButton color="primary">
                        <EditIcon />
                        </IconButton>
                    </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ContactList;
