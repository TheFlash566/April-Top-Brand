import { Heading, Text, Box } from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'


const OurStaff = () => {
    return (
        <div className="ourStaff">
            <div style={{display: 'flex', margin: 'auto', width: '90%', 
                paddingBottom: '5em', paddingTop: '5em', flexDirection: 'column'}}>
                <div style={{ textAlign: 'center', width: '34%', margin: 'auto'}}>
                    <h6 className='wwa-h6'>OUR STAFF</h6>
                    <h3 className='wwa-h3'>Meet Our Team</h3>
                </div>

                <div style={{display: 'flex', gap: '2em', marginTop: '2.5em'}}>
                    <Box height= 'auto' width='31.5%'>
                        <Box bg='black' width='auto' height='440px' borderRadius='10px' >
                            <Box style={{display: 'flex', gap: '10px',
                                 width:'41%', margin: 'auto', paddingTop: '21.5em'}}>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <FaFacebookF />
                                </Box>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <BsTwitter />
                                </Box>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <BsInstagram />
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{textAlign: 'center'}}>
                            <Heading color='#db3030' mt='2rem' fontSize='1.5rem'>Ahmed Adisa</Heading>
                            <Text fontSize={'16px'}>Cheif Executive Officer</Text>
                        </Box>
                    </Box>

                    <Box height= 'auto' width='31.5%'>
                        <Box bg='blue' width= 'auto' height= '440px' borderRadius='10px' >
                            <Box style={{display: 'flex', gap: '10px',
                                 width:'41%', margin: 'auto', paddingTop: '21.5em'}}>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <FaFacebookF />
                                </Box>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <BsTwitter />
                                </Box>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <BsInstagram />
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{textAlign: 'center'}}>
                            <Heading color='#db3030' mt='2rem' fontSize='1.5rem'>Micheal Oki</Heading>
                            <Text fontSize={'16px'}>Full-Stack Developer</Text>
                        </Box>
                    </Box>

                    <Box height= 'auto' width='31.5%'>
                        <Box bg='red' width= 'auto' height= '440px' borderRadius='10px' >
                            <Box style={{display: 'flex', gap: '10px',
                                 width:'41%', margin: 'auto', paddingTop: '21.5em'}}>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <FaFacebookF />
                                </Box>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <BsTwitter />
                                </Box>
                                <Box padding='10px 14px' fontSize='16px'
                                    borderRadius='50%' bg='whitesmoke'>
                                    <BsInstagram />
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{textAlign: 'center'}}>
                            <Heading color='#db3030' mt='2rem' fontSize='1.5rem'>Samuel Komolafe</Heading>
                            <Text fontSize={'16px'}>Front-End Developer</Text>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default OurStaff;