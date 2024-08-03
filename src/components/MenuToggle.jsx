import { Box } from '@mui/material'
import React from 'react';

import './components.css'

const MenuToggle = ({ onClick, open }) => {
    return (
        <Box onClick={onClick}>
            <input type="checkbox" id="checkbox" checked={open} onChange={() => { }} />
            <label htmlFor="checkbox" className="toggle">
                <div className={`bar bar--top`}></div>
                <div className={`bar bar--middle`}></div>
                <div className={`bar bar--bottom`}></div>
            </label>
        </Box>
    )
}

export default MenuToggle