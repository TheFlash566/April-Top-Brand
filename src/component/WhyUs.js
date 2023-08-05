import { AiFillLike } from 'react-icons/ai'
import { BsLaptopFill } from 'react-icons/bs'
import { IoIosNavigate } from 'react-icons/io'
import { PiLightbulbBold } from 'react-icons/pi'


const WhyUs = () => {
    return (
        <div className="whyUs">
            <div style={{ backgroundColor: 'whitesmoke'}}>
                <div className="whatWeDo" style={{width: '90%', margin: 'auto', paddingBottom: '6em', paddingTop: '5em'}}>

                    <div style={{marginBottom: '3em'}}>
                        <h6 className='wwa-h6'>WHY US</h6>
                        <h3 className='wwa-h3'>Our Working Process To Help <br/>  You Boost Your Business</h3>
                    </div>

                    <div style={{display: 'flex', gap: '4em'}}>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column'}}>
                            <h3 className='wu-h3'>
                                <AiFillLike style={{marginRight: '14px',     color: '#db3030'}} />
                                Perfect Strategy</h3>
                            <p className='wu-p1'>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                Learn more about our work!
                            </p>
                            
                            <h3 className='wu-h3'>
                                <PiLightbulbBold style={{marginRight: '14px',     color: '#db3030'}} />
                                Innovative Ideas</h3>
                            <p className='wu-p1'>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                Learn more about our work!
                            </p>

                            <h3 className='wu-h3'>
                                <IoIosNavigate style={{marginRight: '14px',     color: '#db3030'}} />
                                Efffective Solutions</h3>
                            <p className='wu-p1'>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                Learn more about our work!
                            </p>

                            <h3 className='wu-h3'>
                                <BsLaptopFill style={{marginRight: '14px',     color: '#db3030'}} />
                                Testing & Lunching</h3>
                            <p className='wu-p1'>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                Learn more about our work!
                            </p>
                            
                        </div>

                        <div style={{height: '750px', background: '#782c2c', 
                            width: '50%', borderRadius: '10px', marginTop: '1em'}}></div>

                    </div>

                </div>        
            </div>
        </div>
    )
}

export default WhyUs;