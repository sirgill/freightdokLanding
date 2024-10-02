import { createTheme } from '@mui/material/styles';

export const SUCCESS_COLOR = 'rgb(40, 167, 69)',
    PRIMARY_BLUE = 'rgb(0, 145, 255)',
    BG_COLOR = '#F5F7FA',
    FONT_COLOR_SECONDARY = '#717171',
    FONT_COLOR_PRIMARY = '#484848';

export const theme = createTheme({
    palette: {
        primary: {
            main: PRIMARY_BLUE
        }
    },
    typography: {
        fontFamily: ['Myriad-Pro Regular', "Sans-serif"].join(','),
        button: {
            textTransform: 'none'
        }
    },
})