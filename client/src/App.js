import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList"; // assuming you have a ContactList component
import EditContactForm from "./components/EditContact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add-contact" element={<ContactForm />} />
        <Route path="/contacts/:id" element={<EditContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;



