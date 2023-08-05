const SendMessage = () => {
    return (
        <div className="SendMessage" style={{marginBottom: '3em', marginTop: '3em'}}>
            <div className="sm-div" style={{width: '90%', margin: 'auto', marginBottom: '3em'}}>
                <h6 className="skills-h6" style={{color: "#db3030", fontWeight: "600", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", display: "block"}}>SEND MESSAGE</h6>
                <h3 style={{fontSize: "50px", lineHeight: "60px", fontWeight: "600"}}>
                    Have a Question?
                </h3>
                <p style={{fontSize: "18px", color: "#777"}}>Please let us know if you have a question want to leave a comment</p>
            </div>

            <div style={{display: 'flex',width: '90%', margin: 'auto'}}>
                <div style={{width: '40%'}}>
                    <div>
                        <div style={{display: 'flex'}}></div>
                        <h3 style={{fontSize: '22px', fontWeight: 'bold'}}>Our Location</h3>
                        <p style={{fontSize: '18px', color: '#777'}}>Car Servicing, 208 Trainer Avenue street,</p>
                        <p style={{fontSize: '18px', color: '#777'}}>Corner Market, NY - 62617</p>
                    </div>
                    <div>
                        <div style={{display: 'flex'}}></div>
                        <h3 style={{fontSize: '22px', fontWeight: 'bold'}}>Mail Us</h3>
                        <p style={{fontSize: '18px', color: '#777'}}>mail@example.com</p>
                        <p style={{fontSize: '18px', color: '#777'}}>mail@example.com</p>
                    </div>
                    <div>
                        <div style={{display: 'flex'}}></div>
                        <h3 style={{fontSize: '22px', fontWeight: 'bold'}}>Call Us</h3>
                        <p style={{fontSize: '18px', color: '#777'}}>+1(12) 366 411 4899</p>
                        <p style={{fontSize: '18px', color: '#777'}}>+1(12) 366 411 4899</p>
                    </div>
                </div>

                <div style={{width: '57%', marginBottom: '3em'}}>
                        <form style={{textAlign: 'right'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '1rem'}}>
                                <input type="text" placeholder="Name*" style={{background: '#F4F6F9', outline: 'antiquewhite', borderRadius: '0.25rem',
                                 border: '1px solid #F4F6F9', padding: '15px 20px'}}></input>
                                <input type="email" placeholder="Email*" style={{background: '#F4F6F9', outline: 'antiquewhite', borderRadius: '0.25rem',
                                 border: '1px solid #F4F6F9', padding: '15px 20px'}}></input>
                            </div>
                            <input type="text" placeholder="Subject" style={{background: '#F4F6F9', outline: 'antiquewhite',
                             borderRadius: '0.25rem', border: '1px solid #F4F6F9', marginRight: '25.5rem', padding: '15px 20px', marginBottom: '1rem'}}>
                             </input>
                            <textarea placeholder="Message" style={{background: '#F4F6F9', outline: 'antiquewhite', borderRadius: '0.25rem',
                             border: '1px solid #F4F6F9', display: 'block', width: '100%', minHeight: '200px', marginBottom: '1rem', padding: '15px 20px'}}></textarea>
                            <button type="submit" style={{background: '#db3030', outline: 'antiquewhite', borderRadius: '0.25rem',fontSize: '16px', fontWeight: '600',
                             color: '#F4F6F9', border: '1px solid #db3030', padding: '15px 20px', cursor: 'pointer'}}>Submit Message</button>
                        </form>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default SendMessage;