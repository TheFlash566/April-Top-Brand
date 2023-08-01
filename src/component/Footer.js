import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <>
             <div className="Footer_container" style={{background: 'black', height: 'auto'}}>
                    <div className="footer_content" style={{display: 'flex', gap: '4em', width: '90%', margin: 'auto', paddingTop: '4em', paddingBottom: '4em'}}>
                            <div  className="fc1" style={{width: '30%',}}>
                                <Link className="apt-logo" to="/">
                                    <img src="/images/logo_1.png" alt="apt-logo" className="apt-logo"/>
                                </Link>

                                <p className="fc_p" style={{marginTop: '2em'}}>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. 
                                    Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.</p>
                            </div>

                            <div style={{display: 'flex', gap: '4em',flexDirection: 'column', width: '70%'}}>
                                <div style={{display: 'flex', gap: '4em'}}>
                                    <div>
                                        <h3 className="fc_h3">Want to work with us?</h3>
                                        <p className="fc_p">Use This Email</p>
                                        <p className="fc_p">mail@example.com</p>
                                    </div>

                                    <div>
                                        <h3 className="fc_h3">Want to say hi?</h3>
                                        <p className="fc_p">Genenaral Inquires</p>
                                        <p className="fc_p">support@example.com</p>
                                    </div>

                                    <div>
                                        <h3 className="fc_h3">Find us on social media.</h3>
                                        <p className="fc_p">Social Media</p>
                                        <div style={{display: 'flex', gap: '1em'}}>
                                            <div style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #777'}}></div>
                                            <div style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #777'}}></div>
                                            <div style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #777'}}></div>
                                        </div>
                                    </div>                                    
                                </div>

                                <div style={{display: 'flex', gap: '10em'}}>
                                    <div>
                                        <h3 className="fc_h3">Company</h3>
                                        <p className="fc_p">Careers</p>
                                        <p className="fc_p">News & Media</p>
                                        <p className="fc_p">Contact us</p>
                                    </div>

                                    <div>
                                        <h3 className="fc_h3">What We Do</h3>
                                        <p className="fc_p">About Us</p>
                                        <p className="fc_p">Blog Posts</p>
                                        <p className="fc_p">Services</p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="fc_h3">Quick Links</h3>
                                        <p className="fc_p">Terms of services</p>
                                        <p className="fc_p">Privacy policy</p>
                                        <p className="fc_p">Support</p>
                                    </div>
                                </div>
                            </div>
                    </div>
             </div>
           
        </>
    )
}

export default Footer;