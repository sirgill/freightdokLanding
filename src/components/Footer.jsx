import { Box, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useContext } from 'react'
import { PRIMARY_BLUE } from '../utils/utils'
import { routes } from '../common/constants'
import { Link } from 'react-router-dom'

import Apple from '../assets/images/apple.svg'
import GooglePlay from '../assets/images/googlePlay.svg'
import LinkedIn from '../assets/images/linkedIn.svg'
import Twitter from '../assets/images/twitter.svg'
import { Context } from '../providers/context'

const FooterWrapper = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        gap: 30
    },
    'p': { color: '#fff' }
}))

const Footer = ({ appleStoreLink, googleStoreLink }) => {
    const { data } = useContext(Context);

    return (
        <Box sx={{ bgcolor: PRIMARY_BLUE }}>
            <FooterWrapper container sx={{ px: 10, py: 6, }} >
                <Grid item md={5} xs={12} sm={6}>
                    <Stack gap={3}>
                        <Stack>
                            <Typography fontWeight={600} fontSize={22} pb={2}>freightdok</Typography>
                            <Typography fontSize={16}>Copyright &#169; {new Date().getFullYear()} Freightdok</Typography>
                            <Typography>All rights reserved.</Typography>
                        </Stack>
                        <Stack flexDirection='row' gap={3}>
                            <a href={data?.linkedInUrl} target='_blank' rel='noreferrer'>
                                <Box component='img' sx={{ width: 30 }} src={LinkedIn} alt='LinkedIn' />
                            </a>
                            <a href={data?.twitterUrl} target='_blank' rel='noreferrer'>
                                <Box component='img' sx={{ width: 30 }} src={Twitter} alt='Twitter' />
                            </a>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item sm={6} md={7} xs={12}>
                    <Grid gap={0} container flexWrap='wrap'>
                        <Grid item xs={5} sm={4} md={4}>
                            <Stack>
                                <Typography fontWeight={600} fontSize={18} pb={2}>Company</Typography>
                                <Typography className='links-navigate' fontSize={14} pb={1}>About Us</Typography>
                                <Typography className='links-navigate' fontSize={14} pb={1}>Contact Us</Typography>
                                <Typography className='links-navigate' fontSize={14} pb={1}>Pricing</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={5} sm={4} md={4}>
                            <Stack>
                                <Typography fontWeight={600} fontSize={18} pb={2}>Support</Typography>
                                <Typography className='links-navigate' component={Link} to={routes.useTerms} fontSize={14} pb={1}>Terms of service</Typography>
                                <Typography className='links-navigate' component={Link} to={routes.privacyPolicy} fontSize={14} pb={1}>Privacy Policy</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Stack>
                                <Typography fontWeight={600} fontSize={18} pb={2}>Download our App</Typography>
                                <Stack direction='row' gap={2} flexWrap="wrap">
                                    <a href={appleStoreLink}>
                                        <img src={Apple} alt='Download from Apple store' loading='lazy' />
                                    </a>
                                    <a href={googleStoreLink}>
                                        <img src={GooglePlay} alt='Download from Google Play store' loading='lazy' />
                                    </a>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </FooterWrapper>
        </Box>
    )
}

export default Footer