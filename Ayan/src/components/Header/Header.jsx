import { useTranslation } from 'react-i18next';
import { IoMoonOutline, IoSunnyOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Header.css';

const Header = ({ scrolhome, scrolabout, scrolservices, scrolportfolio, scrolcontact }) => {

    const { t, i18n } = useTranslation();
    const [isGenre, setIsGenre] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isRotating, setIsRotating] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsGenre(false);
    };

    const handleThemeToggle = () => {
        toggleTheme();
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 500);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavItemClick = (scrollFunc) => {
        scrollFunc();
        setMobileMenuOpen(false);
    };

    const navItems = t("Nav", { returnObjects: true });

    return (
        <header>
            <div className="header">
                <div onClick={() => scrolhome()}>
                    <span className="logo" onClick={() => scrolhome()}>Ayán </span>
                    <span className="logotext">AGENCY</span>
                </div>
                <div className="nav">
                    <div className='navtext'>
                        <span onClick={() => scrolhome()} className="navitem">{navItems[0]}</span>
                        <span onClick={() => scrolabout()} className="navitem">{navItems[1]}</span>
                        <span onClick={() => scrolservices()} className="navitem">{navItems[2]}</span>
                        <span onClick={() => scrolportfolio()} className="navitem">{navItems[3]}</span>
                        <span onClick={() => scrolcontact()} className="navitem">{navItems[4]}</span>
                    </div>
                    <div className='btns'>
                        <button className="btn" onClick={handleThemeToggle}>
                            <span className={`theme-icon ${isRotating ? 'rotate' : ''}`}>
                                {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                            </span>
                        </button>
                        <div className='language-selector'>
                            <button className='btn' onClick={() => setIsGenre(!isGenre)}>
                                {t("lng")}
                            </button>
                            <AnimatePresence>
                                {isGenre && (
                                    <motion.div
                                        className="language-dropdown"
                                        initial={{ opacity: 0, y: -10, x: '-50%' }}
                                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                                        exit={{ opacity: 0, y: -10, x: '-50%' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <button className='lngbtn' onClick={() => changeLanguage("ru")}>Ru Руский</button>
                                        <button className='lngbtn' onClick={() => changeLanguage("en")}>En English</button>
                                        <button className='lngbtn' onClick={() => changeLanguage("am")}>Am Հայերեն</button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <button className="burger-menu" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
                </button>
                <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className='mobile-navtext'>
                        <span onClick={() => handleNavItemClick(scrolhome)} className="mobile-navitem">{navItems[0]}</span>
                        <span onClick={() => handleNavItemClick(scrolabout)} className="mobile-navitem">{navItems[1]}</span>
                        <span onClick={() => handleNavItemClick(scrolservices)} className="mobile-navitem">{navItems[2]}</span>
                        <span onClick={() => handleNavItemClick(scrolportfolio)} className="mobile-navitem">{navItems[3]}</span>
                        <span onClick={() => handleNavItemClick(scrolcontact)} className="mobile-navitem">{navItems[4]}</span>
                    </div>
                    <div className='mobile-btns'>
                        <button className="btn" onClick={handleThemeToggle}>
                            <span className={`theme-icon ${isRotating ? 'rotate' : ''}`}>
                                {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                            </span>
                        </button>
                        <div className='language-selector'>
                            <button className='btn' onClick={() => setIsGenre(!isGenre)}>
                                {t("lng")}
                            </button>
                            <AnimatePresence>
                                {isGenre && (
                                    <motion.div
                                        className="language-dropdown"
                                        initial={{ opacity: 0, y: -10, x: '-50%' }}
                                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                                        exit={{ opacity: 0, y: -10, x: '-50%' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <button className='lngbtn' onClick={() => changeLanguage("ru")}>Ru Руский</button>
                                        <button className='lngbtn' onClick={() => changeLanguage("en")}>En English</button>
                                        <button className='lngbtn' onClick={() => changeLanguage("am")}>Am Հայերեն</button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;