import './PhotoHeader.css'
import { FaHome } from "react-icons/fa";

const PhotoHeader = ({ name, goBack, goHomeToPortfolio }) => {
    return (
        <div className='header ph'>
            <h1 className='phn'>{name}</h1>
            <div>
                <button className='hbtn' onClick={goBack}>‹ Back</button>
                <button className='hbtn' onClick={goHomeToPortfolio}><FaHome /> Home</button>
            </div>
        </div>
    )
}

export default PhotoHeader
