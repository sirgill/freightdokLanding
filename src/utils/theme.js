import { createTheme } from "@mui/material/styles";

export const blue = "#0091ff",
    successIconColor = '#2DCE89',
    errorIconColor = '#F97A5D';
const white = "#FFFFFF";
export const SUCCESS_COLOR = 'rgb(40, 167, 69)',
    PRIMARY_BLUE = 'rgb(0, 145, 255)';

export const theme = createTheme({
    palette: {
        text: {
            primary: '#000',
            secondary: '#6f6f6f'
        },
        primary: {
            main: PRIMARY_BLUE,
        },
        success: {
            main: SUCCESS_COLOR
        },
    },
    typography: {
        fontFamily: ['Myriad-Pro Regular', "Sans-serif"].join(','),
        button: {
            textTransform: 'none'
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                asterisk: {
                    color: "red"
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                color: {
                    secondary: {
                        color: 'blue'
                    }
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                standardSuccess: {
                    color: SUCCESS_COLOR,
                    border: `1px solid ${SUCCESS_COLOR}`
                },
                standardInfo: () => {
                    return {
                        borderStyle: "solid",
                        borderWidth: '1px'
                    }
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    borderTop: 'none'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        // '&: disabled': {
                        //     color: theme.palette.error.contrastText,
                        //     backgroundColor: theme.palette.error.light,
                        //     opacity: .6
                        // }
                    }
                },
                containedPrimary: {
                    '&:hover': {
                        color: '#fff'
                    }
                }
            },
            outlined: {}
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:disabled': {
                        opacity: .6,
                        cursor: 'default'
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    fontWeight: 400,
                    borderBottom: '1px solid #0000000D',
                    paddingLeft: '1rem',
                    align: 'left',
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    fontWeight: 600
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    border: `1px solid`,
                    paddingTop: '8px'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: '1px solid #cfcfcf'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: white
                }
            }
        }
    }
});