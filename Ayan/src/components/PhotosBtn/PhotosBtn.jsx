import { FaHome } from "react-icons/fa";
import './PhotosBtn.css'

const PhotosBtn = ({ next, prev, goHomeToPortfolio }) => {
    return (
        <div>
            <button className='hbtn pbtn' onClick={() => prev()}>&#60;</button>
            <button className='hbtn pbtn' onClick={() => goHomeToPortfolio()}><FaHome /></button>
            <button className='hbtn pbtn' onClick={() => next()}>&#62;</button>
        </div>
    )
}

export default PhotosBtn