import { Box, Button, Container, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FONT_COLOR_PRIMARY, FONT_COLOR_SECONDARY } from '../../utils/utils'

const TableHeaderCell = styled(TableCell)`
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;
    border: none;
`

const TableDataCell = styled(TableCell)`
    text-align: center;
    font-size: 1rem;
    border: none;
`

const Info = ({ pricing: data = {} }) => {
    const { pricing } = data || {};

    const getIcon = (val) => val ? <CheckCircleIcon sx={{ color: '#6ACE0C' }} /> : <CancelIcon sx={{ color: 'red' }} />

    return <Stack>
        <Typography align='center' fontSize='2rem' color={FONT_COLOR_PRIMARY}>Our Plans</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Compare Plans</TableHeaderCell>
                        <TableHeaderCell sx={{ fontSize: 18 }}>Software</TableHeaderCell>
                        <TableHeaderCell sx={{ fontSize: 18 }}>Software + Team</TableHeaderCell>
                        <TableHeaderCell sx={{ fontSize: 18 }}>Our Authority</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableDataCell>Choose your plan according to your organizational needs</TableDataCell>
                        <TableDataCell>Use freightdok to bid, book, service, and streamline back office tasks. </TableDataCell>
                        <TableDataCell>Operate on your authority and let us handle all your back office tasks and operations. </TableDataCell>
                        <TableDataCell>Lease onto our authority and we will help manage your operations, payments, and compliance. </TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableDataCell />
                        <TableDataCell><Button fullWidth variant='outlined'>Start free trial</Button></TableDataCell>
                        <TableDataCell><Button fullWidth variant='outlined'>Get Started</Button></TableDataCell>
                        <TableDataCell><Button fullWidth variant='outlined'>Get Started</Button></TableDataCell>
                    </TableRow>
                    {(pricing || []).map((price, i) => {
                        return <TableRow key={i}>
                            {price.map((item, j) => {
                                const cell = typeof item === 'boolean' ? getIcon(item) : item;
                                return (
                                    <TableCell
                                        key={j}
                                        sx={{
                                            textAlign: j === 0 ? 'left' : 'center',
                                            color: FONT_COLOR_SECONDARY,
                                            border: '1px solid #c4c4c4',
                                            borderLeft: j === 0 ? 'none' : '1px solid #c4c4c4',
                                            borderRight: j === price.length - 1 ? 'none' : '1px solid #c4c4c4',
                                            padding: '8px',
                                            backgroundColor: i % 2 !== 0 ? '#F3FBFC' : 'white', // header row background
                                        }}
                                    >
                                        {cell}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </Stack>
}

const Pricing = () => {
    const [data, setData] = useState({});
    const [pricing, setPricing] = useState({});

    useEffect(() => {
        const homepageConfig = async () => {
            const res = await fetch('/homeConfig.json');
            const result = await res.json();
            setData(result);
        }
        const pricingConfig = async () => {
            const res = await fetch('/pricing.json');
            const result = await res.json();
            setPricing(result);
        }
        homepageConfig();
        pricingConfig();
    }, [])

    return (
        <Box sx={{ height: '100dvh' }}>
            <Header />
            <Container component='main' maxWidth='lg' sx={{ py: 6 }}>
                <Info pricing={pricing} />
            </Container>
            <Footer appleStoreLink={data?.appleStoreLink} googleStoreLink={data?.googleStoreLink} />
        </Box>
    )
}

export default Pricing