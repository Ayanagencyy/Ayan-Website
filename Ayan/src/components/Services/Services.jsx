import './Services.css'
import { useTranslation } from 'react-i18next';

const Services = ({ services }) => {
    const { t, i18n } = useTranslation();

    const Services = t("Services", { returnObjects: true });
    return (
        <>
            <div id="services" ref={services}></div>
            <div className='services'>
                <h1 >{Services[0]}</h1>
                <div className='serv'>
                    {
                        Services[1].map(el => {
                            return <li key={el} className='service'>{el}</li>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Services