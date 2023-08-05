import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
      <div className="AboutUs" style={{height: 'auto', background: 'white'}}>
          <div style={{display: 'flex', width: '90%', margin: 'auto', gap: '4em', 
            paddingTop: '6em', paddingBottom: '6em'}}>
            <div style={{width: '45%'}}>
              <h6 className='wwa-h6'>ABOUT US</h6>
              <h3 className='wwa-h3'>One of the fastest growing agency</h3>
            </div>
            
            <div style={{width: '55%'}}>
              <p style={{marginBottom: '3rem', fontSize: '18px', lineHeight: '30px' }}>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.Lorem ipsum viverra feugiat. 
                Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Learn more about our work! Lorem ipsum viverra feugiat.
              </p>
              <Link to='/services' className="read-more-link" style={{width: 'fit-content', display: 'flex'}}>Read More 
                <BsArrowRight style={{marginLeft: '10px'}} /> 
              </Link>
            </div>
          </div>
      </div>
    );
  };
  
  export default AboutUs;