// src/services/emailService.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_cjt21zr';
const TEMPLATE_ID = 'template_qjyz16i';
const PUBLIC_KEY = 'yTmrBfe7I0Vd-i2vX';

export const sendContactEmail = (formData) => {
    const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date ? formData.date.toLocaleDateString() : '',
        option: formData.option,
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
