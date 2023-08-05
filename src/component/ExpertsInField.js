import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const ExpertsInField = () => {
    return (
        <div className="expertsInField">
            <div style={{display: 'flex', margin: 'auto', width: '90%', 
                paddingBottom: '5em', paddingTop: '5em', flexDirection: 'column'}}>
                <div style={{ }}>
                    <h6 className='wwa-h6'>EXPERTS IN FIELD</h6>
                    <h3 className='wwa-h3'>What makes us <br /> special?</h3>
                </div>

                <div style={{width: '95%', margin: 'auto', gap: '6.9em', display: 'flex'}}>
                   <div>
                        <CircularProgress value={65} color='#db3030' 
                            size='200px' thickness='3px'>
                            <CircularProgressLabel pt='45px' fontWeight={500}>65%</CircularProgressLabel>
                        </CircularProgress>
                        <h5 style={{textAlign: 'center', 
                            fontWeight: 'bold'}}>Years of operation</h5>
                   </div>

                   <div>
                        <CircularProgress value={75} color='#db3030' 
                            size='200px' thickness='3px'>
                            <CircularProgressLabel pt='45px' fontWeight={500}>75%</CircularProgressLabel>
                        </CircularProgress>
                        <h5 style={{textAlign: 'center', 
                            fontWeight: 'bold'}}>Specialists</h5>
                   </div>

                   <div>
                        <CircularProgress value={85} color='#db3030' 
                            size='200px' thickness='3px'>
                            <CircularProgressLabel pt='45px' fontWeight={500}>85%</CircularProgressLabel>
                        </CircularProgress>
                        <h5 style={{textAlign: 'center', 
                            fontWeight: 'bold'}}>Satisfied Clients</h5>
                   </div>

                   <div>
                        <CircularProgress value={90} color='#db3030' 
                            size='200px' thickness='3px'>
                            <CircularProgressLabel pt='45px' fontWeight={500}>90%</CircularProgressLabel>
                        </CircularProgress>
                        <h5 style={{textAlign: 'center', 
                            fontWeight: 'bold'}}>Projects deliverd</h5>
                   </div>

                </div>
            </div>
            

        </div>
    )
}

export default ExpertsInField;


// react icons

// FaFacebookF , BsTwitter , BsInstagram , BsWhatsapp , FaLinkedinIn
// AiFillLike , BsLaptopFill , IoNavigate , PiStrategyBold , BsCheck , FaCheck
// IoLocationSharp , FiMail , BiSolidPhoneCall , IoMegaphone , FaArrowTurnUp
 