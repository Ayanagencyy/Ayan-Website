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
  const [loading, setLoading] = useState(false);  // <-- loading state

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
    setLoading(true);  // start loading

    try {
      await sendContactEmail(form);
      setMessage('Your message has been sent successfully!');
      setForm({ name: '', email: '', phone: '', date: null, option: '' }); // optional: clear form
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
      console.error('Email send error:', error?.text || error);
    } finally {
      setLoading(false);  // stop loading
    }
  };

  return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={onClose}>✖</span>
          <h2>{modal[0]}</h2>
          <p>{modal[1]}</p>
          <form onSubmit={handleSubmit}>
            <span className="cinfo m">{modal[2]}</span>
            <input
                type="text"
                name="name"
                placeholder={modal[2]}
                onChange={handleChange}
                value={form.name}
                required
                className="inp"
                disabled={loading}
            />

            <span className="cinfo m">{modal[3]}</span>
            <input
                type="email"
                name="email"
                placeholder={modal[4]}
                onChange={handleChange}
                value={form.email}
                required
                className="inp"
                disabled={loading}
            />

            <span className="cinfo m">{modal[5]}</span>
            <input
                type="tel"
                name="phone"
                placeholder={modal[6]}
                onChange={handleChange}
                value={form.phone}
                required
                className="inp"
                disabled={loading}
            />

            <span className="cinfo m">{modal[7]}</span>
            <DatePicker
                selected={form.date}
                onChange={handleDateChange}
                placeholderText={modal[8]}
                dateFormat="dd.MM.yyyy"
                locale={enUS}
                className="inp date"
                minDate={new Date()}
                required
                disabled={loading}
            />

            <span>{modal[10]}</span>
            <select
                className='sel'
                name="option"
                onChange={handleChange}
                value={form.option}
                required
                disabled={loading}
            >
              {modal[11].map((el, index) => (
                  <option key={index} value={el}>{el}</option>
              ))}
            </select>

            <button
                type="submit"
                className='mbutton'
                disabled={loading}
            >
              {loading ? 'Sending...' : modal[9]}
            </button>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
  );
};

export default Modal;
