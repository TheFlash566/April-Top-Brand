import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs'

const AboutBanner = () => {
    return (
        <div className="about_banner" style={{background: 'black'}}>
           <div style={{width: '90%', margin: 'auto', 
                paddingTop: '8em', paddingBottom: '8em'}}>
                <div style={{display: 'flex', gap: '10px', width: '16%', margin: 'auto'}}>
                    <Link style={{textDecoration: 'none', color: '#fff'}} to='/'>Home</Link>
                    <BsArrowRight style={{color: 'white', fontSize: '14px', marginTop: '6px'}} />
                    <Link style={{textDecoration: 'none', color: 'white',
                         fontWeight: 'bold'}} >About</Link>
                </div>
           </div>
        </div>
    )
}

export default AboutBanner;