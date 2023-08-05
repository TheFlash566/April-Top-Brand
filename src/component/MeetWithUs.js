import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const MeetWithUs = () => {
    return (
        <div className="meetWithUs" style={{background: 'antiquewhite'}}>
            <div style={{display: 'flex', width: '90%', margin: 'auto', gap: '16em', 
                paddingTop: '6em', paddingBottom: '6em'}}>
                <div style={{width: '85%'}}>
                    <h6 className='wwa-h6'>24/7 ACTIVE SUPORT TEAM</h6>
                    <h3 className='wwa-h3'>Need Immediate Support Or <br /> Any Help?</h3>
                </div>
                
                <div style={{width: '19%'}}>
                    <Link to='/services' className="read-more-link" style={{width: 'fit-content', display: 'flex', marginTop: '3em'}}>Read More 
                        <BsArrowRight style={{marginLeft: '10px'}} /> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MeetWithUs;


    