import { useTranslation } from 'react-i18next';
import './About.css'

const About = ({ about }) => {
    const { t, i18n } = useTranslation();

    const aboutitems = t("About", { returnObjects: true });

    return (
        <>
            <div id='About' ref={about}></div>
            <div className='about' >
                <h4 className='abouttext'>{aboutitems[0]}</h4>
                <div className='abouttime'>
                    <span className='aboutbtn'>{aboutitems[1]}</span>
                    <span className='aboutbtn'>{aboutitems[2]}</span>
                </div>
                <div className='experiance'>
                    {aboutitems[3].map(el => {
                        return <span key={el} className='aboutbtn'>{el}</span>
                    })}
                </div>
            </div>

        </>
    )
}

export default About