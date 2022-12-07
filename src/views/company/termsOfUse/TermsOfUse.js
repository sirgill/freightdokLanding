import {Box, Button, Stack, Typography} from "@mui/material";
import {PRIMARY_BLUE} from "../../../utils/utils";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowBackIos";
import React, {useMemo} from "react";
import {Para, termsUseTexts} from "../common/constants";
import './termsOfUse.css'

const ListingComponent = (text) => {

    return <Box component='li' key={text.title + text.index}>
        <Box component='span' sx={{fontWeight: 600, fontSize: 18, pb: 1.5}}>{text.title}</Box>
        {text.liDesc?.length ?
            <Box component={'ol'} sx={{textAlign: 'justify', pt: 2}}>
                {text.liDesc.map((t, i) => <ListingComponent {...t} key={t.title + text.index + 'level' + i}/>)}
            </Box>
            : <p>
                {text.desc}
            </p>}
    </Box>
}

const TermsOfUse = () => {
    const text = useMemo(() => {
        const items = termsUseTexts.map((text, i) => {
            return <ListingComponent {...text} key={text.title} index={i}/>
        })
        return <Box component='ol'>
            {items}
        </Box>
    }, []);


    return <Stack p={3} className='useTerms'>
        <Stack sx={{position: 'relative'}} direction='row' alignItems='center' justifyContent='center'>
            <Typography variant='h4' align='center' sx={{color: PRIMARY_BLUE, fontSize: 32, fontWeight: 700, mb: 2}}>freightdok,
                INC.</Typography>
            <Button component={Link} to='/' variant='outlined' startIcon={<ArrowForwardIcon/>}
                    sx={{position: 'absolute', left: 0}}>Home</Button>
        </Stack>
        <Typography variant='h4' align='center' sx={{fontWeight: 550}}>CUSTOMER TERMS OF SERVICE</Typography>
        <Box px={10} py={3} sx={{'.paraText': {mb: 3}}}>
            <Box>
                <Typography>Last Updated: November 09, 2022</Typography>
                <Para sx={{textAlign: 'justify'}}>
                    These Customer Terms of Service (these "Customer Terms”) are between you (“<span
                    className='highlight'>you</span>”, <span className='highlight'>Customer</span>(with respect to a
                    business, organization or other legal entity), or <span className='highlight'>Authorized User</span>")
                    and freightdok, Inc. (or its successors or assigns) (<span
                    className='highlight'>freightdok, Inc</span>",
                    <span className='highlight'>we</span>”, <span className='highlight'>our</span>”, or <span
                    className='highlight'>us</span>”) and describe your rights and
                    responsibilities when using the mobile and/or web-based software platform and related technology
                    services (the <span className='highlight'>Services</span>) offered by us.
                    These Customer Terms and any Order Form(s) (defined in Section 2.3 (Subscriptions) below) form
                    the <span className='highlight'>Agreement</span>” between you and us with
                    respect to the Services.
                    <br/>
                    <Box component='span' sx={{mt: 2}} className='highlight'>Please read these terms carefully to ensure
                        you understand each provision. These Customer Terms contain a jury trial waiver provision and a
                        mandatory arbitration provision.</Box>
                    <br/> Please make sure you have the necessary authority to enter into the Agreement on behalf of the
                    Customer before proceeding. The Services are not intended for and should not be used by anyone under
                    the age of 18.
                </Para>
            </Box>
            <Box className={'orderedListing'}>
                {text}
            </Box>
        </Box>
    </Stack>
}

export default TermsOfUse;