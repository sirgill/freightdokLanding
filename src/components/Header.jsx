import { Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BG_COLOR, FONT_COLOR_SECONDARY, PRIMARY_BLUE } from '../utils/utils'
import { Link } from 'react-router-dom'

const Header = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const headerConfig = async () => {
            const res = await fetch('/headerConfig.json');
            const result = await res.json();
            setData(result);
        }
        headerConfig();
    }, [])


    const goToLogin = () => {
        window.open(data.signinUrl, '_blank');
    }

    const goToSignUp = () => {
        window.open(data.signupUrl, '_blank');
    }

    return (
        <Stack sx={{ backgroundColor: BG_COLOR, p: 2.2, px: 10 }} direction='row' justifyContent='space-between' alignItems='center'>
            <Typography sx={{ color: PRIMARY_BLUE, fontSize: 32, fontWeight: 700 }}>freightdok.</Typography>
            <Stack direction='row' gap={5} sx={{
                'a': {
                    color: FONT_COLOR_SECONDARY,
                    textDecoration: 'none'
                }
            }}>
                <Typography component={Link} to='/'>Home</Typography>
                <Typography component={Link} to='/feature'>Feature</Typography>
                <Typography component={Link} to='/pricing'>Pricing</Typography>
            </Stack>
            <Stack direction='row' gap={4}
                sx={{
                    '.MuiTypography-root': {
                        textDecoration: 'none'
                    }
                }}
            >
                <Button onClick={goToSignUp}>Signup</Button>
                <Button onClick={goToLogin} variant='contained'>Login</Button>
            </Stack>
        </Stack>
    )
}

export default Header