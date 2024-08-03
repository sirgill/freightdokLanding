import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { PRIMARY_BLUE } from '../utils/utils'
import { routes } from '../common/constants'
import { Link } from 'react-router-dom'

import Apple from '../assets/images/apple.svg'
import GooglePlay from '../assets/images/googlePlay.svg'

const Footer = ({ appleStoreLink, googleStoreLink }) => {
    return (
        <Box sx={{ bgcolor: PRIMARY_BLUE }}>
            <Grid container sx={{ px: 10, py: 6, 'p': { color: '#fff' } }} >
                <Grid item md={5} xs={12}>
                    <Stack>
                        <Typography fontSize={22} pb={2}>freightdok</Typography>
                        <Typography fontSize={16}>Copyright &#169; {new Date().getFullYear()} Freightdok</Typography>
                        <Typography>All rights reserved.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Grid gap={8} container>
                        <Grid item>
                            <Stack>
                                <Typography fontSize={18} pb={2}>Company</Typography>
                                <Typography className='links-navigate' fontSize={14} pb={1}>About Us</Typography>
                                <Typography className='links-navigate' fontSize={14} pb={1}>Contact Us</Typography>
                                <Typography className='links-navigate' fontSize={14} pb={1}>Pricing</Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack>
                                <Typography fontSize={18} pb={2}>Support</Typography>
                                <Typography className='links-navigate' component={Link} to={routes.useTerms} fontSize={14} pb={1}>Terms of service</Typography>
                                <Typography className='links-navigate' component={Link} to={routes.privacyPolicy} fontSize={14} pb={1}>Privacy Policy</Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack>
                                <Typography fontSize={18} pb={2}>Download our App</Typography>
                                <Stack direction='row' gap={2}>
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
            </Grid>
        </Box>
    )
}

export default Footer