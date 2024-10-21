import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwvl_x57Jny6iYj6kx2hZyvTp5B9pGSDrMMfg2N1EG9anlEAeHcCM9Cz-loZ2mmTaJlAw/exec';
        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            setFormData({
                email: '',
                message: ''
            });
            console.log('Form submitted successfully');
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    };

    return (
        <form className="contact-me" onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleFormChange} 
                className="contact-email" 
                placeholder="Email" 
                required
            />
            <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleFormChange} 
                className="contact-message" 
                placeholder="Message" 
                required
            />
            <button type="submit" className="contact-button">SUBMIT</button>
        </form>
    );
};

export default ContactForm;
