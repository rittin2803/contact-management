const express = require('express');
const router = express.Router();
const { 
    createContact, 
    getContacts, 
    updateContact, 
    deleteContact 
} = require('../controllers/contactController');

// API Endpoints
router
    .route('/contacts')
    .post(createContact)
    .get(getContacts);

router
    .route('/contacts/:id')
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;
