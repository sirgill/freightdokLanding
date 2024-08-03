import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Link } from 'react-router-dom'

import { FONT_COLOR_SECONDARY, PRIMARY_BLUE } from '../../utils/utils'
import { routes } from '../../common/constants'

const Card = styled(Box)(() => ({
    display: 'flex',
    gap: 5,
    alignItems: 'start',
}));

const ExplorePlans = ({ explorePlans = [] }) => {
    return (
        <Box sx={{ py: 5 }}>
            <Grid container sx={{ p: 3, px: 5, gap: 5 }}>
                <Grid item xs={12}>
                    <Typography fontSize={28} color={FONT_COLOR_SECONDARY} fontWeight={600} align='center'>Explore our plans</Typography>
                    <Typography fontSize={16} color={FONT_COLOR_SECONDARY} align='center'>
                        Find the right plans for your need.
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5 }}>
                    {explorePlans.map(plan => {
                        return <Card key={plan.title}>
                            <Box component='img' alt={plan.title} sx={{ p: .5, width: plan.imgWidth ? plan.imgWidth : '5rem' }} src={plan.image + '.svg'} />
                            <Box sx={{ maxWidth: '30ch' }}>
                                <Typography fontSize={22} color={FONT_COLOR_SECONDARY} fontWeight={600}>{plan.title}</Typography>
                                <Typography fontSize={14} color={FONT_COLOR_SECONDARY}>{plan.detail}</Typography>
                            </Box>
                        </Card>
                    })}
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <Typography component={Link} to={routes.pricing} className='link-navigate' color={PRIMARY_BLUE} sx={{ textDecoration: 'none' }} align='center'>
                        View our plans and pricing &#8594;
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ExplorePlans