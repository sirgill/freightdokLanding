import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import { PRIMARY_BLUE } from "../../../utils/utils";
import { List, Para } from '../common/constants'

const PrivacyPolicy = () => {
    return <Stack sx={{ p: 3 }}>
        <Stack sx={{ position: 'relative' }} direction='row' alignItems='center' justifyContent='center'>
            <Typography variant='h4' align='center' sx={{ color: PRIMARY_BLUE, fontSize: 32, fontWeight: 700, mb: 2 }}>freightdok, INC.</Typography>
            <Button component={Link} to='/' variant='outlined' startIcon={<ArrowForwardIcon />} sx={{ position: 'absolute', left: 0 }}>Home</Button>
        </Stack>
        <Typography variant='h4' align='center' sx={{ fontWeight: 600 }}>PRIVACY POLICY</Typography>
        <Box px={10} py={3} sx={{ '.paraText': { mb: 3 } }}>
            <Box>
                <Typography>Last Updated: November 09, 2022</Typography>
                <Para sx={{ textAlign: 'justify' }}>
                    At freightdok, Inc, we understand that your privacy is an important part of the trust you place in us. This Policy explains how we collect, use, disclose, and otherwise process Personal Information about you collected in connection with our Services, including our websites and mobile applications that post or link to this Policy.
                    When we use the terms “freightdok”, “we”, “us”, or “our” in this Policy, we are referring to freightdok, Inc. and its subsidiaries and affiliated companies.
                    The term “Services” in this Policy is defined to include our website(s), all mobile or web-based software platforms, including the freightdok application and the related services we offer to our customers, unless we provide a different privacy policy to individuals at the time we collect their Personal Information. Please note this Policy does not apply to our processing of employee or contractor Personal Information.
                </Para>
            </Box>
            <Para heading='PERSONAL INFORMATION COLLECTED' headingSx={{ textDecoration: 'underline' }}>
                When we use the term “Personal Information” in this Policy, we mean any information relating to an identified or identifiable natural person who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. It does not include aggregated or anonymized information that is maintained in a form that is not capable of being associated with or reasonably linked to you. Our use and sharing of aggregated or anonymized information is not covered by this Policy.
                We collect Personal Information about you in various ways, including directly from you when you provide it to us, automatically when you interact with our Services, and from other sources and third parties:
            </Para>
            <Para heading='Personal Information You Provide'>
                We collect Personal Information you provide through our Services or give to us in any other way, including over the phone, electronically or on paper. In connection with these activities, we collect the following:
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List bText="Contact information,"> such as name, email address, postal address, and telephone number;</List>
                        <List bText="Demographic information,">such as age or region;</List>
                        <List bText="Employment-related information,"> such as employer, broker, shipper, receiver, truck and driver identifiers and work title;</List>
                        <List bText="Account information, ">such as user ID, password and load preferences;</List>
                        <List bText="Transaction information,">such as payment information, financial account information, credit information, order details, and order preferences;</List>
                        <List bText="Load-Related information,">such as load identifiers, price, pick-up and drop-off information;</List>
                        <List bText="Geolocation information,"> such as your current location and destination preferences;</List>
                        <List bText="Broker and Shipper generated content,">such as preferences relating to calls, messages and load negotiation;</List>
                        <List bText="Inquiry information,">such as the content of your email, text, or chat with us and, where applicable, your voice from calls with our Services.</List>
                    </Box>
                </Stack>
            </Para>
            <Para heading='Personal Information Automatically Collected'>
                As is true of most digital platforms, we collect certain Personal Information automatically when you use our online Services, including:
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List bText="Log Files:">We record certain information in a log file every time your browser or mobile device requests any information from our server, such as your device's operating system, application software, Internet Protocol (IP) address, device identifiers, access times, browser type and language, peripherals, user log data, Active Directory information, and the websites you visited before and after our online Services.</List>
                        <List bText="Cookies, Analytics and Other Data Collection Tools:">We also collect (directly or via third parties) information about your usage and activity on our online Services, including information about your orders through essential and non-essential cookies, web beacons, and similar data collection tools.</List>
                    </Box>
                </Stack>
            </Para>
            <Para heading='Personal Information from Other Sources and Third Parties'>
                We also obtain Personal Information from other sources, which we often combine with Personal Information we collect either on our Services or directly from you.
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List bText="Business Partners and Service Providers:">Our business partners and service providers, such as payment processors and analytics providers, collect Personal Information and often share some of this information with us. For example, we receive Personal Information from vendors to coordinate loads, identify prospective customers and to improve our business operations.</List>
                        <List bText="Information Providers:"> We often purchase, lease or otherwise obtain lists or data from third- party list or data providers to populate our load inventory and to correct or supplement Personal Information we collect.</List>
                        <List bText="Social Media Partners:"> Some of our online Services allow you to sign in and associate your social media accounts with us, including, but not limited to, Twitter, LinkedIn, and Facebook accounts. By using this functionality or otherwise interacting with us through social media, you give us permission to access your social media profile, including Personal Information that you have made available to be shared, and to use it in accordance with the social media partner’s terms of use and this Policy. Please refer to the privacy policies and privacy settings for your social media account for information about what Personal information is shared with us and other connected applications and to manage the information that is shared through your social media account, including information about your activities in connection with our Services.</List>
                        <List bText="Publicly Available Sources: ">We collect Personal Information about you that we do not otherwise have (including contact information, employment related information and product interest information) from company websites and other publicly available sources in order to facilitate our Services.</List>
                    </Box>
                </Stack>
            </Para>
            <Para heading='USE OF PERSONAL INFORMATION WE COLLECT' headingSx={{ textDecoration: 'underline' }}>
                We use Personal Information we collect to:
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List>Create and administer your account with us;</List>
                        <List>Process your order and facilitate the Services;
                        </List>
                        <List>
                            Recommend available loads and drivers;
                        </List>
                        <List>
                            Send you transaction information, including confirmations, invoices, technical notices, product and services information, updates, security alerts, and support and administrative messages;
                        </List>
                        <List>
                            Provide you with news about products and services offered by us and our selected partners;
                        </List>
                        <List>
                            Respond to your comments and questions and provide customer service;
                        </List>
                        <List>
                            Understand your needs, customize our offerings to those needs, and provide you with better service;
                        </List>
                        <List>
                            Improve our internal operations;
                        </List>
                        <List>
                            Facilitate the provision of software updates, product support, and other services related to our mobile applications and other products;
                        </List>
                        <List>
                            Protect our rights and those of our customers and employees and to prevent, investigate or provide notice of fraud or unlawful or criminal activity;
                        </List>
                        <List>
                            Enforce and carry out contracts and agreements;
                        </List>
                        <List>
                            Comply with legal obligations.
                        </List>
                    </Box>
                </Stack>
            </Para>
            <Para heading='DISCLOSURE OF PERSONAL INFORMATION' headingSx={{ textDecoration: 'underline' }}>
                We disclose Personal Information in the following ways:
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List bText="Within freightdok:">
                            We disclose Personal Information to other freightdok entities for purposes and uses that are consistent with this Policy. For example, we may disclose Personal Information about you to process and fulfill your order or to facilitate communication between you and a freightdok subsidiary.
                        </List>
                        <List bText="Service Providers:">
                            We disclose Personal Information to third-party vendors, consultants and other service providers who perform functions or services on our behalf and under our instructions to make our Services available to you. For example, we may disclose Persona
                        </List>
                        <List bText="Brokers and Shippers:">
                            We disclose Personal Information to brokers and shippers as part of our Services for purposes of developing and executing proposed and completed transactions facilitated by us, as well as to improve performance, products, and services. Brokers and shippers also use the Personal Information for their internal purposes (including administrative purposes).
                        </List>
                        <List bText="Legal Obligations and Rights: ">
                            We may disclose Personal Information:
                            in connection with the establishment, exercise, or defense of legal claims;
                            to comply with laws or to respond to lawful requests and legal process;
                            to protect the rights and property of us, our agents, customers, and others, including to enforce our agreements, policies, and terms of use;
                            to detect, suppress, or prevent fraud;
                            to reduce credit risk and collect debts owed to us;
                            to protect the health and safety of us, our customers, or any person;
                            or as otherwise required by applicable law.
                        </List>
                        <List bText="Business Transaction or Reorganization:">
                            We may disclose Personal Information as part of a corporate business transaction, such as in connection with or during negotiation of any merger, sale of company assets, financing, or acquisition of all or a portion of our business. We may transfer Personal Information to a third party as one of the business assets in such a transaction. We may also disclose Personal Information in the event of insolvency, bankruptcy, or receivership.
                        </List>
                        <List bText="Consent:">
                            We may disclose Personal Information about you to other third parties with your prior consent.
                        </List>
                    </Box>
                </Stack>
            </Para>
            <Para heading='YOUR PRIVACY CHOICES' headingSx={{ textDecoration: 'underline' }}>
                If you have opted in to our marketing communications (or where permitted by law, if you have provided us or we have obtained your contact information), we may call you, send you email messages, direct mail offers, text messages, push notifications or other communications regarding products
                or services depending on the method of communication selected. You may ask us not to do so by:
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List>
                            following the opt-out instructions in promotional communications;
                        </List>
                        <List>
                            checking certain boxes on the forms we use to collect your information;
                        </List>
                        <List>
                            modifying your communication preferences through the Services or on your device.
                        </List>
                    </Box>
                </Stack>
                To manage any phone, email or text messaging options as a broker or shipper, please contact us at help@freightdok.io. You may also make requests about your contact preferences and changes to your information by contacting your primary freightdok contact. If you opt out of promotional communications, we may still send you non-promotional communications, such as transactional information about your account or our ongoing business engagements.
                If you have permitted access to your location information through your mobile device, you may withdraw this permission by modifying your preferences through your device. Please note that you may not be able to use certain aspects of the Services, such as nearby load matching without granting permission to your location.
            </Para>
            <Para heading='REGION-SPECIFIC DISCLOSURES' headingSx={{ textDecoration: 'underline' }}>
                The laws of certain regions require specific information to be included in a privacy policy. Please see below for region-specific disclosures that may be applicable to you:
                <Stack>
                    <Box component='ul' sx={{ 'li': { mb: 1 } }}>
                        <List>
                            If you are a resident of Nevada, you may opt out of “sales” where your personal information is exchanged for monetary consideration. We do not engage in such activity, however, you may submit a request to opt out of potential future sales under Nevada law by emailing us at help@freightdok.io Please include sufficient information for us to identify you in your email, such as information about your history with freightdok, or, if applicable, your account information. Please note we will take reasonable steps to verify your identity and the authenticity of the request. Once verified, we will maintain your request in the event our practices change.
                        </List>
                    </Box>
                </Stack>
            </Para>
            <Para heading='CHILDREN’S PRIVACY' headingSx={{ textDecoration: 'underline' }}>
                Our online Services are general audience sites intended for corporate and governmental purchasers. Our Services are not directed to, and we do not intend to, or knowingly, collect or solicit Personal Information from children under the age of 16. If you are under the age of 16, do not use our Services or provide us with any Personal Information either directly or by other means. If a child under 16 has provided Personal Information to us, we encourage the child’s parent or guardian to contact us to request that we remove the Personal Information from our systems. If we learn that any Personal Information
                we collect has been provided by a child under the age of 16, we will promptly delete that Personal Information.
            </Para>
            <Para heading='THIRD PARTY WEBSITES' headingSx={{ textDecoration: 'underline' }}>
                Except where we post, link to or expressly adopt or refer to this Policy, this Policy does not apply to, and we are not responsible for, any Personal Information practices of third-party websites and online services or the practices of other third parties. To learn about the Personal Information practices of third parties, please visit their respective privacy policies.
            </Para>
            <Para heading='CHANGES TO THIS POLICY' headingSx={{ textDecoration: 'underline' }}>
                We will update this Policy from time to time. When we make changes to the Policy, we will change the "Last Updated" date at the beginning of the Policy. If we make material changes to the Policy, we will notify you by email to your registered email address, by prominent posting on our Services, or through other appropriate communication channels.
                All changes shall be effective from the date of publication unless otherwise provided in the notification.
            </Para>
            <Para heading='HOW TO CONTACT US' headingSx={{ textDecoration: 'underline' }}>
                If you have any questions or requests in connection with this Policy or other privacy-related matters, please send an email to help@freightdok.io
            </Para>
        </Box>
    </Stack >
}

export default PrivacyPolicy;