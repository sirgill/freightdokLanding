import React, { useContext, } from 'react';
import Header from '../../components/Header';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import Slider from 'react-slick';

import { BG_COLOR, FONT_COLOR_SECONDARY, PRIMARY_BLUE } from '../../utils/utils';
import cw from "./../../assets/images/cw.png"
import capstone from "./../../assets/images/capstone.png"
import loadsmart from "./../../assets/images/ld.jpg"
import ch from "./../../assets/images/ch.png"
import everest from "./../../assets/images/everest.png"
import slog from "./../../assets/images/sgog.png"
import Footer from '../../components/Footer';
import ExplorePlans from './ExplorePlans';

import './styles.css';
import { Context } from '../../providers/context';

const Home = () => {
    const { data } = useContext(Context)

    const goToSignUp = () => {
        window.open(data.signupUrl, '_blank');
    }

    return (
        <Box className='landingPageContainer' component='main'>
            <Header />
            <Box sx={{ p: 4, px: 15, backgroundColor: BG_COLOR, overflow: 'hidden' }} component='section'>
                <Grid container position='relative'>
                    <Grid item sm={6} xs={12}>
                        <Typography className='sourceBookService' sx={{ fontSize: '3em', fontWeight: 600 }}>{data?.title}</Typography>
                        <Typography className='sourceBookService' sx={{ color: PRIMARY_BLUE, fontSize: '3em', fontWeight: 600 }}>{data?.subtitle}</Typography>
                        <Typography className='sourceBookService' sx={{ my: 4, fontSize: '1em', fontWeight: 500, color: '#717171' }}>{data?.detail}</Typography>
                        <Button variant='contained' sx={{ px: 2 }}
                            onClick={goToSignUp}
                        >
                            Register
                        </Button>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className='landingPageOval' />
                    </Grid>
                </Grid>

            </Box>
            <Box component='section' className='sectionPadding'>
                <OurPartnersSection />
            </Box>
            <Box component='section' sx={{ mb: 0 }} className='sectionPadding'>
                <Grid container sx={{ px: 6, py: 3 }} gap={3}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: 36 }} color={FONT_COLOR_SECONDARY} align='center'>How do we do this?</Typography>
                        <Typography sx={{ color: FONT_COLOR_SECONDARY }} align='center'>{data?.howDoWeDoSubtext}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction='row' justifyContent='center' gap={3} flexWrap={'wrap'}>
                            {(data?.operations || []).map(operation => {
                                return <OperationCard {...operation} key={operation.title} />
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box component='section' sx={{ bgcolor: BG_COLOR }}>
                <ExplorePlans explorePlans={data?.explorePlans} />
            </Box>
            <Footer appleStoreLink={data?.appleStoreLink} googleStoreLink={data?.googleStoreLink} />
        </Box>
    )
}

const Card = styled(Box)(({ theme }) => ({
    border: '1px solid #e5e5e5',
    borderRadius: '10px',
    p: 3,
    width: '15rem',
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: "0px 2px 4px 0px #ABBED133"
}))

const OperationCard = ({ title, detail, image }) => {
    return <Card sx={{ p: 3, }}>
        <Box component='img' sx={{ mb: 1 }} loading='lazy' src={image + '.svg'} alt={title} />
        <Typography sx={{ color: FONT_COLOR_SECONDARY }} fontSize={22} fontWeight={600} mb={1}>{title}</Typography>
        <Typography sx={{ color: FONT_COLOR_SECONDARY }} align='center'>{detail}</Typography>
    </Card>
}

const OurPartnersSection = () => {

    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <>
            <div className="container">
                <div style={{ width: "100%" }}>
                    <h1 style={{ textAlign: "center", paddingBottom: "40px" }}>Our Partners</h1>
                    <div style={{ marginLeft: "120px" }}>
                        <Slider {...sliderSettings} >
                            <div >
                                <img src={cw} alt="logo" />
                            </div>
                            <div >
                                <img src={capstone} alt="logo" />
                            </div>
                            <div >
                                <img src={ch} alt="logo" />
                            </div>
                            <div >
                                <img src={loadsmart} alt="logo" />
                            </div>
                            <div >
                                <img style={{ height: "45px", objectFit: "contain" }} src={everest} alt="logo" />
                            </div>
                            <div >
                                <img src={slog} alt="logo" />
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home