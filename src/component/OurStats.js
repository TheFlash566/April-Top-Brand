import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// import SpecialistStats from './SpecialistStats'
import Counter from './Counter'

const OurStats = () => {
    return (
        <div className="ourStats" style={{background: 'whitesmoke'}}>
                <div style={{width: '90%', margin: 'auto', paddingBottom: '9em', paddingTop: '4.5em'}}>
                    <div style={{marginBottom: '3em'}}>
                        <h6 className='wwa-h6'>Our Stats</h6>
                        <h3 className='wwa-h3'>We do design, code <br/> and develop.</h3>
                    </div>
                    <div style={{display: 'flex', gap: '4.2em'}}>
                        <div style={{height: '640px', background: '#4c2929', width: '50%', borderRadius: '10px'}}></div>
                        <div style={{display: 'flex', flexDirection: 'column',  width:'50%', paddingTop: '2.4em'}}>
                                <h5 className='wwa-h5'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in 
                                    ligula. Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.
                                </h5>
                                <p className='wwa-p1'>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                    Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.
                                </p>
                                <p className='wwa-p'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                    Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.</p>
                                <Link to='/about' className="read-more-link" style={{width: 'fit-content',}}>Read More 
                                    <BsArrowRight style={{marginLeft: '10px'}} /> 
                                </Link>
                                <div style={{display: 'flex', gap: '9em', marginTop: '4em'}}>
                                    <Counter target={5020} title='Projectes delivered' duration={1} />
                                    <Counter target={2780} title='Specialists' duration={2} />
                                </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default OurStats;