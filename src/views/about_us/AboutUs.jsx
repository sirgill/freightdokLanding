import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BG_COLOR, FONT_COLOR_PRIMARY, FONT_COLOR_SECONDARY } from '../../utils/utils'
import { Context } from '../../providers/context'

const AboutUs = () => {
    const { data } = useContext(Context) || {};

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box sx={{ height: '100dvh' }}>
            <Header />
            <Box>
                <Container sx={{ py: 4 }}>
                    <Typography color={FONT_COLOR_PRIMARY} fontSize='2.3rem' align='center'>
                        About Us
                    </Typography>
                </Container>
                <Box sx={{ bgcolor: BG_COLOR }}>
                    <Container maxWidth='lg' gap={{ sm: 5 }}>
                        <Grid container flexWrap='wrap' sx={{ p: { xs: 4, sm: 8 } }} alignItems='center'>
                            <Grid item sm={4} xs={12}>
                                <Typography color='#000' fontSize='3rem' align='center' fontWeight={600}>
                                    Our Mission
                                </Typography>
                            </Grid>
                            <Grid item sm={8} xs={12}>
                                <Typography color={FONT_COLOR_SECONDARY} fontSize='16px' align='justify' width={{ xs: 'auto', md: '70ch' }} margin='auto'>
                                    {data?.ourMission}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Container sx={{ p: 4, minHeight: '60vh' }} maxWidth='lg'>
                    <Typography color={'#000'} fontSize='1.5rem' fontWeight={600} mb={2}>
                        The Start of a new Carrier Ecosystem:
                    </Typography>
                    <Typography color={FONT_COLOR_SECONDARY} align='justify' dangerouslySetInnerHTML={{ __html: data?.carrierEcoSystem }}>
                        {/* {data?.carrierEcoSystem} */}
                    </Typography>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default AboutUs