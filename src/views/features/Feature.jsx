import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

const Feature = () => {
    return (
        <Box sx={{ height: '100dvh' }}>
            <Header />
            <Box sx={{ textAlign: 'center' }}>
                <Typography align='center' sx={{ mt: 5 }} variant='h4'>
                    Not available
                </Typography>
                <Button variant='contained' component={Link} to={'/'} sx={{ mt: 3 }}>
                    Back to Home
                </Button>
            </Box>
        </Box>
    )
}

export default Feature