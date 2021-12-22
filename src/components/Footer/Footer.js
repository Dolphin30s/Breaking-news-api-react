import React, { useEffect, useState } from 'react'
import './footer.css'

const Footer = () => {
    const [display, setDisplay] = useState('none')

    useEffect(() => {
        setInterval(() => {
            setDisplay('block')
        }, 1000);
        return () => clearInterval();
    }, []);

    return (
        <div className="footer" style={{ display }}>
            <p>This site created by <a className='text-white' target='_blank'
                rel="noopener noreferrer"
                href='https://github.com/asaf6024'> @Asaf Almog 2021</a></p>
        </div>
    )
}
export default Footer