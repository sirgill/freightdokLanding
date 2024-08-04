import { Box, Button, Stack as MuiStack, Paper, Popover, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useContext } from 'react'
import { BG_COLOR, FONT_COLOR_SECONDARY, PRIMARY_BLUE } from '../utils/utils'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../common/constants'
import MenuToggle from './MenuToggle'
import { Context } from '../providers/context'

const Stack = styled(MuiStack)(() => ({
    backgroundColor: BG_COLOR,
    padding: '18px 30px',
}))
const NavLinks = styled(MuiStack)(({ theme }) => ({
    gap: 10,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    'a': {
        color: FONT_COLOR_SECONDARY,
        textDecoration: 'none',
        position: 'relative',
        margin: '0 20px',
    },
    '.active': {
        color: '#000',
        '&::after': {
            content: '" "',
            position: 'absolute',
            height: '1px',
            backgroundColor: PRIMARY_BLUE,
            bottom: 0,
            left: 0,
            width: '100%'
        }
    },
}))
const Toggle = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
}))

const Header = () => {
    const { data } = useContext(Context);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;




    const goToLogin = () => {
        window.open(data.signinUrl, '_blank');
    }

    const goToSignUp = () => {
        window.open(data.signupUrl, '_blank');
    }

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' component='header'>
            <Typography sx={{ color: PRIMARY_BLUE, fontSize: 32, fontWeight: 700, textDecoration: 'none' }} component={Link} to='/'>freightdok.</Typography>
            <NavLinks direction='row' gap={5} sx={{}}>
                <Typography component={NavLink} to='/' >
                    Home
                </Typography>
                <Typography component={NavLink} to='/feature'>Feature</Typography>
                <Typography component={NavLink} to={routes.pricing}>Pricing</Typography>
            </NavLinks>
            <MuiStack direction='row' gap={3}
                sx={{
                    '.MuiTypography-root': {
                        textDecoration: 'none'
                    }
                }}
            >
                <Button onClick={goToLogin} variant='outlined'>Login</Button>
                <Button onClick={goToSignUp} variant='contained'>Signup</Button>
                <Toggle>
                    <MenuToggle onClick={handleClick} open={open} />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Paper component={Stack} sx={{
                            gap: 1,
                            'a': {
                                color: '#000',
                                textDecoration: 'none',
                                position: 'relative',
                            },
                            '.active': {
                                '&::after': {
                                    content: '" "',
                                    position: 'absolute',
                                    height: '1px',
                                    backgroundColor: PRIMARY_BLUE,
                                    bottom: 0,
                                    left: 0,
                                    width: '100%'
                                }
                            },
                        }}>
                            <Typography component={NavLink} to='/' >
                                Home
                            </Typography>
                            <Typography component={NavLink} to='/feature'>Feature</Typography>
                            <Typography component={NavLink} to={routes.pricing}>Pricing</Typography>
                        </Paper>
                    </Popover>
                </Toggle>
            </MuiStack>
        </Stack>
    )
}

export default Header