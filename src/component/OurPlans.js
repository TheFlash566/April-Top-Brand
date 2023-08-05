import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const OurPlans = () => {
    return (
        <div className="ourPlans" style={{background: "whitesmoke"}}>
            <div style={{width: '90%', margin: 'auto', paddingBottom: '6em', paddingTop: '5em'}}>
                <div style={{marginBottom: '3em'}}>
                    <h6 className='wwa-h6'>OUR PLANS</h6>
                    <h3 className='wwa-h3'>Pricing Table</h3>
                </div>


                <div style={{marginTop: "3rem", display: "flex", gap: "2.5em"}}>
                    <div style={{width: "30%"}}>
                        <div style={{backgroundColor: "white", position: "relative", padding: "40px 35px", borderRadius: "6px"}}>
                            <div className="pricing-header" style={{borderBottom: "1px solid #C7C7D5", paddingBottom: "10px"}}>
                                <h4 style={{fontSize: "28px", lineHeight: "38px",fontWeight: 'bold'}}>
                                    Small Business
                                </h4>

                                <p style={{fontSize: "18px", lineHeight: "28px", color: "#777"}}>A beautiful, simple website</p>

                                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px", alignItems: "flex-end"}}>
                                    <div style={{display: "flex"}}>
                                        <h3 className="currency" style={{fontWeight: "300", fontSize: "50px",color: "#db3030", lineHeight: "60px"}}>$</h3>
                                        <h3 style={{fontWeight: "bold", color: "#db3030", fontSize: "50px", lineHeight: "60px"}}>199</h3>
                                        <span style={{color: "#757589", fontSize: "15px", lineHeight: "24px", paddingTop: "2em"}}>/month</span>
                                    </div>
                                </div>

                                <Link to="/Link" style={{padding: "15px 65px", fontSize: "16px", fontWeight: "600", backgroundColor: "#db3030", borderRadius: "6px", color: "#fff", textDecoration: "none"}}>
                                    Get Started Today
                                    <BsArrowRight style={{marginLeft: '10px'}} />                                    
                                </Link>

                                <h6 style={{fontWeight: "400", fontSize: "14px", color: '#777', textAlign: 'center', marginTop: "2.5em"}}>100% money back gaurantee</h6>
                            </div>

                            <div style={{marginTop: "1.5rem"}}>
                                <div style={{display: "block"}}>
                                    <ul style={{listStyle: "none"}}>
                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true" style={{color: "#00D09C"}}></span>
                                            10GB Bandwidth Internet
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> Business &amp; Finance Analysing
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> 15 Social Media Reviews
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> Customer Managemet
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span class="fa fa-check mr-2" aria-hidden="true"></span> 24/7 Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: "30%"}}>
                        <div style={{backgroundColor: "white", position: "relative", padding: "40px 35px", borderRadius: "6px"}}>
                            <div className="pricing-header" style={{borderBottom: "1px solid #C7C7D5", paddingBottom: "10px"}}>
                                <h4 style={{fontSize: "28px", lineHeight: "38px",fontWeight: 'bold'}}>
                                    Small Business
                                </h4>

                                <p style={{fontSize: "18px", lineHeight: "28px", color: "#777"}}>A beautiful, simple website</p>

                                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px", alignItems: "flex-end"}}>
                                    <div style={{display: "flex"}}>
                                        <h3 className="currency" style={{fontWeight: "300", fontSize: "50px",color: "#db3030", lineHeight: "60px"}}>$</h3>
                                        <h3 style={{fontWeight: "bold", color: "#db3030", fontSize: "50px", lineHeight: "60px"}}>199</h3>
                                        <span style={{color: "#757589", fontSize: "15px", lineHeight: "24px", paddingTop: "2em"}}>/month</span>
                                    </div>
                                </div>

                                <Link to="/Link" style={{padding: "15px 65px", fontSize: "16px", fontWeight: "600", backgroundColor: "#db3030", borderRadius: "6px", color: "#fff", textDecoration: "none"}}>
                                    Get Started Today
                                    <BsArrowRight style={{marginLeft: '10px'}} />                                    
                                </Link>

                                <h6 style={{fontWeight: "400", fontSize: "14px", color: '#777', textAlign: 'center', marginTop: "2.5em"}}>100% money back gaurantee</h6>
                            </div>

                            <div style={{marginTop: "1.5rem"}}>
                                <div style={{display: "block"}}>
                                    <ul style={{listStyle: "none"}}>
                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true" style={{color: "#00D09C"}}></span>
                                            10GB Bandwidth Internet
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> Business &amp; Finance Analysing
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> 15 Social Media Reviews
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> Customer Managemet
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span class="fa fa-check mr-2" aria-hidden="true"></span> 24/7 Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: "30%"}}>
                        <div style={{backgroundColor: "white", position: "relative", padding: "40px 35px", borderRadius: "6px"}}>
                            <div className="pricing-header" style={{borderBottom: "1px solid #C7C7D5", paddingBottom: "10px"}}>
                                <h4 style={{fontSize: "28px", lineHeight: "38px",fontWeight: 'bold'}}>
                                    Small Business
                                </h4>

                                <p style={{fontSize: "18px", lineHeight: "28px", color: "#777"}}>A beautiful, simple website</p>

                                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px", alignItems: "flex-end"}}>
                                    <div style={{display: "flex"}}>
                                        <h3 className="currency" style={{fontWeight: "300", fontSize: "50px",color: "#db3030", lineHeight: "60px"}}>$</h3>
                                        <h3 style={{fontWeight: "bold", color: "#db3030", fontSize: "50px", lineHeight: "60px"}}>199</h3>
                                        <span style={{color: "#757589", fontSize: "15px", lineHeight: "24px", paddingTop: "2em"}}>/month</span>
                                    </div>
                                </div>

                                <Link to="/Link" style={{padding: "15px 65px", fontSize: "16px", fontWeight: "600", backgroundColor: "#db3030", borderRadius: "6px", color: "#fff", textDecoration: "none"}}>
                                    Get Started Today
                                    <BsArrowRight style={{marginLeft: '10px'}} />                                    
                                </Link>

                                <h6 style={{fontWeight: "400", fontSize: "14px", color: '#777', textAlign: 'center', marginTop: "2.5em"}}>100% money back gaurantee</h6>
                            </div>

                            <div style={{marginTop: "1.5rem"}}>
                                <div style={{display: "block"}}>
                                    <ul style={{listStyle: "none"}}>
                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true" style={{color: "#00D09C"}}></span>
                                            10GB Bandwidth Internet
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> Business &amp; Finance Analysing
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> 15 Social Media Reviews
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span className="fa fa-check mr-2" aria-hidden="true"></span> Customer Managemet
                                        </li>

                                        <li style={{fontSize: "18px", lineHeight: "40px", position: "relative", color: "#777"}}>
                                            <span class="fa fa-check mr-2" aria-hidden="true"></span> 24/7 Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>    

        </div>
    )
}

export default OurPlans;