import { useTranslation } from 'react-i18next';
import './Modal.css'
import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enAU, enUS } from 'date-fns/locale';

const Modal = ({ onClose }) => {
  const { t } = useTranslation();
  const modal = t("Modal", { returnObjects: true });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setForm({ ...form, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>✖</span>
        <h2>{modal[0]}</h2>
        <p>{modal[1]}</p>
        <form onSubmit={handleSubmit}>
          <span className="cinfo m">{modal[2]}</span>
          <input type="text" name="name" placeholder={modal[2]} onChange={handleChange} required className="inp" />

          <span className="cinfo m">{modal[3]}</span>
          <input type="email" name="email" placeholder={modal[4]} onChange={handleChange} required className="inp" />

          <span className="cinfo m">{modal[5]}</span>
          <input type="tel" name="phone" placeholder={modal[6]} onChange={handleChange} required className="inp" />

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
          />
          <span>{modal[10]}</span>
          <select className='sel'>
            {
              modal[11].map((el) => {
                return <option>{el}</option>
              })
            }
          </select>
          <button type="submit" className='mbutton'>{modal[9]}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
