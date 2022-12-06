import { Box, Typography } from "@mui/material"

const Para = ({ children, heading, headingSx = {}, sx = {} }) => {
    return <Box sx={{ textAlign: 'justify' }} component='section' className='paraText'>
        {heading && <Typography component='strong' sx={{ fontWeight: 600, fontSize: 20, ...headingSx }}>{heading}</Typography>}
        <Box sx={{ ...sx }}>{children}</Box>
    </Box>
}

const List = ({ bText = '', children }) => {
    return <Box component='li' sx={{ textAlign: 'justify' }}>
        <Box component='span' sx={{ fontWeight: 600, mr: 1 }}>{bText}</Box>
        {children}
    </Box>
}

export {
    Para,
    List
}