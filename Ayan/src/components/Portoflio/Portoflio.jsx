import './Portoflio.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Portoflio = ({ portfolio }) => {
    const { t, i18n } = useTranslation();
    const [showAll, setShowAll] = useState(false);
    
    const imgs = t("images", { returnObjects: true });
    const visibleImages = showAll ? imgs : imgs.slice(0, 4);
    
    const handleShowMore = () => {
        setShowAll(true);
    };
    
    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <>
            <div id='portfolio' ref={portfolio}></div>
            <div className='portfolio'>
                {
                    visibleImages.map((el) => {
                        return <NavLink to={`/photos/${el.id}`} key={el.id}>
                            <h3 className='name'>{el.name}</h3>
                            <div className='imgcard' style={{
                                backgroundImage: `url(${el.path})`,
                            }}>
                                <button className='prtbtn'>{el.btn} &#8594;</button>
                            </div>
                        </NavLink>
                    })
                }
                
                <div className="portfolio-controls">
                    {!showAll && imgs.length > 4 && (
                        <button 
                            className='show-more-btn' 
                            onClick={handleShowMore}
                        >
                            Show more
                        </button>
                    )}
                    
                    {showAll && imgs.length > 4 && (
                        <button 
                            className='show-less-btn' 
                            onClick={handleShowLess}
                        >
                            Show less
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Portoflio