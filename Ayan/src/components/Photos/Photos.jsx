import './Photos.css'
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { data } from '../../db/db'
import { useState } from 'react'
import PhotoHeader from '../PhotoHeader/PhotoHeader'
import { useTranslation } from 'react-i18next'
import PhotosBtn from '../PhotosBtn/PhotosBtn'

const Photos = () => {
    const { id } = useParams()
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const { t, i18n } = useTranslation();
    const currentId = parseInt(id);
    const img = data.photos.find(el => el.id === currentId);
    const totalAlbums = data.photos.length;

    const handleNext = () => {
        setSelectedIndex((prev) => (prev + 1) % img.path.length)
    }

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev - 1 + img.path.length) % img.path.length)
    }

    const handleShowMore = () => {
        setShowAll(true);
    }

    const handleShowLess = () => {
        setShowAll(false);
    }

    const goToNextAlbum = () => {
        const nextId = (currentId % totalAlbums) + 1;
        navigate(`/photos/${nextId}`);
    };

    const goToPrevAlbum = () => {
        const prevId = (currentId - 2 + totalAlbums) % totalAlbums + 1;
        navigate(`/photos/${prevId}`);
    };

    const imgs = t("images", { returnObjects: true });

    const imgname = imgs.find(el => el.id === parseInt(id)).name

    const length = img.path.length
    
    // Определяем, какие фотографии показывать
    const visiblePhotos = showAll ? img.path : img.path.slice(0, 6);

    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    const goHomeToPortfolio = () => {
        navigate("/", { state: { scrollTo: "portfolio" } })
    }
    return (
        <>
            <PhotoHeader name={imgname} goBack={goBack} goHomeToPortfolio={goHomeToPortfolio} />
            <div className='app'>
                <div className='photos'>
                    {
                        visiblePhotos.map((el, index) => (
                            <div
                                key={index}
                                className="photo"
                                style={{ backgroundImage: `url(${el})` }}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div className='num'>{index + 1}/{length}</div>
                            </div>
                        ))
                    }
                    {selectedIndex !== null && (
                        <div className="modal" onClick={() => setSelectedIndex(null)}>
                            <span className="close" onClick={() => setSelectedIndex(null)}>x</span>
                            <span className="arrow left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>‹</span>
                            <img
                                src={img.path[selectedIndex]}
                                alt="Full"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <span className="arrow right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>›</span>
                        </div>
                    )}
                </div>
                
                <div className="photos-controls">
                    {!showAll && img.path.length > 6 && (
                        <button 
                            className='show-more-btn' 
                            onClick={handleShowMore}
                        >
                            Show more photos
                        </button>
                    )}
                    {showAll && img.path.length > 6 && (
                        <button 
                            className='show-less-btn' 
                            onClick={handleShowLess}
                        >
                            Show less photos
                        </button>
                    )}
                </div>
                
                <PhotosBtn next={goToNextAlbum} prev={goToPrevAlbum} goHomeToPortfolio={goHomeToPortfolio}/>
            </div>
        </>
    )
}

export default Photos