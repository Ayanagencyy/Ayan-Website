import { useTranslation } from "react-i18next";
import { useState } from 'react'
import Modal from '../Modal/Modal'
import './Contacs.css'
import { NavLink } from "react-router-dom";

const Contacs = ({contacts}) => {
  const { t, i18n } = useTranslation();

  const [showModal, setShowModal] = useState(false)

  const constacts = t("constacts", { returnObjects: true });

  return (
    <>
      <div id="contacts" ref={contacts}> 
        <div className="contacts">
          <h3 className="ctext">{constacts[0]}</h3>
          <h1 className="ctext2">{constacts[1]}</h1>
          <h2 className="ctext">{constacts[2]}</h2>
          <div className="info">
            <div className="blocks">
              {
                constacts[3].map((el) => {
                  return <NavLink to={el.href} target="_blank" key={el.name}>
                    <div className="contact">
                      <img className="icon" src={el.icon} alt="" />
                      <span className="cinfo">{el.name}</span>
                      <span className="cinfo">{el.info}</span>
                    </div>
                  </NavLink>
                })
              }
            </div>
            <div className="book">
              <h2 className="ctext2">{constacts[4]}</h2>
              <h4 className="ctext">{constacts[5]}</h4>
              <div className="cbtn" onClick={() => setShowModal(true)}>
                {showModal && <Modal onClose={() => setShowModal(false)} />}
                <img className="icon" src="/calendar.svg" alt="" />
                <p>{constacts[6]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacs