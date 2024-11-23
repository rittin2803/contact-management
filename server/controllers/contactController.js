const Contact = require('../models/Contact');

// Create a new contact
exports.createContact = async (req, res) => {
    
    try {
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;

        // Validation of all input fields
        if (!firstName || !lastName || !email || !phone) {
            return res.status(400).json({ message: "All required fields must be filled!" });
        }

        // Finding for existing ones
        const findContact = await Contact.findOne({email : email});

        if(!findContact){
            const newContact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
            await newContact.save();

            // Created
            res.status(201).json(newContact);
        }else{
            // User already exists
            res.json({message : "User already Exists", success: false});
        }
        
    } catch (error) {
        res.status(500).json({ message: "Error creating contact", error: error.message });
    }
};

// Retrieve all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();

        if(contacts.length === 0){
            return res.status(404).json({ message: "No contacts in DB" })
        }

        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Error in retrieval of contacts", error: error.message });
    }
};

// Update a contact
exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.status(400).json({ message: "ID is required"})
        }

        const { firstName, lastName, email, phone, company, jobTitle } = req.body;
        if (!firstName || !lastName || !email || !phone) {
            return res.status(400).json({ message: "Required fields are missing" });
        }
        
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found in DB" });
        }

        res.status(200).json( {message : "Updated Contact Successfully"}, updatedContact);
    } catch (error) {
        res.status(500).json({ message: "Error updating contact", error: error.message });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.status(400).json({ message: "ID is required"})
        }

        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found/already Deleted" });
        }

        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting contact", error: error.message });
    }
};
