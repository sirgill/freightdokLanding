import React from "react";
import { Box, Button, Stack, Link, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './styles.css'
import { PRIMARY_BLUE } from "../../utils/utils";
import Features from "./Features"

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
                >
                    Contact Us
                </Button>
            </Stack>
        </Box>
    </Box>
    <div className='landingPageOval' />
</Box>)


const HomePage = () => {
    return (<>

        <LandingPageHead />
        <Features />

    </>)
}

export default HomePage
