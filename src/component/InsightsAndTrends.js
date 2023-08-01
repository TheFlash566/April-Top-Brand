import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const InsightsAndTrends = () => {
    return (
        <div className="insightsAndTrends">
            <div style={{width: '90%', margin: 'auto', paddingBottom: '6em', paddingTop: '6em'}}>
                <div style={{marginBottom: '4em'}}>
                    <h6 className='wwa-h6'>Insights And Trends</h6>
                    <h3 className='wwa-h3'>Latest Blogs And News</h3>
                </div>

                <div style={{display: 'flex', gap: '4.2em', width: '100%'}}>
                    <div style={{width: '50%'}}>
                        <div style={{height: '540px', background: '#817166', width: '100%', borderRadius: '10px'}}></div>
                        <div style={{display: 'flex', flexDirection: 'column',  width:'100%', paddingTop: '1.5em'}}>
                                <h6 style={{marginBottom: '1rem'}}>MAY 12, 2021. <span style={{color: 'blue'}}>- by Blanche Smith</span></h6>
                                <h5 className='iat-h5'>You can now listen to the entire library of Design Better books for free</h5>
                                <p className='iat-p'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                    Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.</p>
                                <Link to='/about' className="read-more-link" style={{width: '30%', display: 'flex'}}>Read More 
                                    <BsArrowRight style={{marginLeft: '14px', marginTop: '4px'}} />
                                </Link>
                        </div>
                    </div>

                    <div style={{width: '50%'}}>
                        <div style={{height: '540px', background: '#817166', width: '100%', borderRadius: '10px'}}></div>
                        <div style={{display: 'flex', flexDirection: 'column',  width:'100%', paddingTop: '1.5em'}}>
                                <h6 style={{marginBottom: '1rem'}}>MAY 12, 2021. <span style={{color: 'blue'}}>- by Blanche Smith</span></h6>
                                <h5 className='iat-h5'>You can now listen to the entire library of Design Better books for free</h5>
                                <p className='iat-p'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. 
                                    Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.</p>
                                <Link to='/about' className="read-more-link" style={{width: '30%', display: 'flex'}}>Read More 
                                    <BsArrowRight style={{marginLeft: '14px', marginTop: '4px'}} /> 
                                </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InsightsAndTrends;