import React from "react";
import { Box, Button, Stack, Link, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './styles.css'
import { PRIMARY_BLUE } from "../../utils/utils";
import Features from "./Features"
import cw from "./../../assets/images/cw.png"
import capstone from "./../../assets/images/capstone.png"
import loadsmart from "./../../assets/images/ld.jpg"
import ch from "./../../assets/images/ch.png"
import everest from "./../../assets/images/everest.png"
import slog from "./../../assets/images/sgog.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPageHead = () => (<Box sx={{ position: 'relative' }} className={'landingPageContainer'}>
    <Box component='main' p={8}>
        <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
            <Typography sx={{ color: PRIMARY_BLUE, fontSize: 32, fontWeight: 700 }}>freightdok.</Typography>
            <Link href="https://app.freightdok.io/login" underline="none" sx={{ color: "black", fontSize: 25, fontWeight: 700 }}>
                {'Login'}
            </Link>
        </Stack>
        <Box className={'landingPageMidSection'}>
            <Stack sx={{ maxWidth: 600, mr: 5 }}>
                <Typography className='sourceBookService' sx={{ color: PRIMARY_BLUE, fontSize: 56, fontWeight: 600 }}>Source.Book.Service</Typography>
                <Typography className='yourLoadsWith' sx={{ color: '#000000', fontSize: 56, fontWeight: 600 }}>Your Loads with <Typography component={'span'} sx={{ color: PRIMARY_BLUE, fontSize: 56, fontWeight: 600 }}>{'Data'}</Typography></Typography>
                <Typography sx={{ color: "#7d7d7d", fontSize: 22, fontWeight: 500, whiteSpace: 'pre' }} className='content'>
                    <span>
                        {'Source your loads, streamline your bookings, and automate\ncheck calls all within '}
                    </span>
                    <Typography component={'span'} sx={{ color: PRIMARY_BLUE, fontSize: 22, fontWeight: 600 }}>{'freightdok. '}</Typography>
                    {'The new way of booking loads\nbacked by data.'}
                </Typography>
            </Stack>
            <Stack mt={3}>
                <Button variant={'contained'} className='contactUsButton'
                    sx={{ py: '12px', width: 250, fontSize: 22, display: 'flex' }}
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                        window.location.href = "https://app.freightdok.io/federalSignup"
                    }}
                >
                    Register
                </Button>
            </Stack>
        </Box>
    </Box>
    <div className='landingPageOval' />
</Box>)


const HomePage = () => {
    return (<>

        <LandingPageHead />
        <div style={{ background: "red", marginTop: "120px" }}>
            <OurPartnersSection />
        </div>
        <Features />

    </>)
}



const OurPartnersSection = () => {

    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
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




    return (<> <div className="container">
      
      <div style={{width:"100%"}}>
      <h1  style={{color:"#0091ff",textAlign:"center",paddingBottom:"40px"}}>Our Partners</h1>
       <div style={{marginLeft:"120px"}}>
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
                <img style={{height:"45px",objectFit:"contain"}}  src={everest} alt="logo" />
            </div>
            <div >
                <img src={slog} alt="logo" />
            </div>

        </Slider>



       </div>
        </div>

    </div></>)
}



export default HomePage
