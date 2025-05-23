import './Footer.css'
import { useTranslation } from 'react-i18next'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className='foot'>
            <div className='footer'>
                <div className='links'>
                    <img className="flogo" src="/logo.png" alt="" />
                    <NavLink to={"https://www.instagram.com/ayan_agency_?igsh=MTJiNDhnNHV2d3RnOQ=="} target='_blank'>
                        <FaInstagram size={30} id='inst' />
                    </NavLink>
                    <NavLink to={"https://www.facebook.com/share/1G1EHrcb1J/?mibextid=wwXIfr"} target='_blank'>
                        <FaFacebook size={30} id='fcb' />
                    </NavLink>
                </div>
                <span>{t("Footer")}</span>
            </div>
        </div>
    )
}

export default Footer