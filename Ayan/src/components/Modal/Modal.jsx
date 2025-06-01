import { useTranslation } from 'react-i18next';
import './Modal.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS } from 'date-fns/locale';
import { sendContactEmail } from '../../services/emailService.js';

const Modal = ({ onClose }) => {
  const { t } = useTranslation();
  const modal = t("Modal", { returnObjects: true });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    option: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage('');
  };

  const handleDateChange = (date) => {
    setForm({ ...form, date });
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      await sendContactEmail(form);
      setMessage('Your message has been sent successfully!');
      setForm({ name: '', email: '', phone: '', date: null, option: '' });
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
      console.error('Email send error:', error?.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={onClose}>✖</span>
          <h2>{modal[0]}</h2>
          <p>{modal[1]}</p>
          <form onSubmit={handleSubmit}>
            <div className="cinfo m">{modal[2]}</div>
            <input
                type="text"
                name="name"
                placeholder={modal[2]}
                value={form.name}
                onChange={handleChange}
                required
                className="inp"
            />

            <div className="cinfo m">{modal[3]}</div>
            <input
                type="email"
                name="email"
                placeholder={modal[4]}
                value={form.email}
                onChange={handleChange}
                required
                className="inp"
            />

            <div className="cinfo m">{modal[5]}</div>
            <input
                type="tel"
                name="phone"
                placeholder={modal[6]}
                value={form.phone}
                onChange={handleChange}
                required
                className="inp"
            />

            <div className="cinfo m">{modal[7]}</div>
            <DatePicker
                selected={form.date}
                onChange={handleDateChange}
                placeholderText={modal[8]}
                dateFormat="dd.MM.yyyy"
                locale={enUS}
                className="inp date"
                minDate={new Date()}
                required
            />

            <div className="cinfo m">{modal[10]}</div>
            <select
                name="option"
                value={form.option}
                onChange={handleChange}
                required
                className="sel"
            >
              <option value="" disabled>{modal[10]}</option>
              {modal[11].map((el, index) => (
                  <option key={index} value={el}>{el}</option>
              ))}
            </select>

            <button type="submit" className="mbutton" disabled={loading}>
              {loading ? t('Sending...') : modal[9]}
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </div>
  );
};

export default Modal;
