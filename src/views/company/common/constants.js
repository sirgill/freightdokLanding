import {Box, Typography} from "@mui/material"
import {EMAIL_FREIGHTDOK_HELP} from "../../../common/constants";

const Para = ({children, heading, headingSx = {}, sx = {}}) => {
    return <Box sx={{textAlign: 'justify'}} component='section' className='paraText'>
        {heading &&
            <Typography component='strong' sx={{fontWeight: 600, fontSize: 20, ...headingSx}}>{heading}</Typography>}
        <Box sx={{...sx}}>{children}</Box>
    </Box>
}

const List = ({bText = '', children}) => {
    return <Box component='li' sx={{textAlign: 'justify'}}>
        <Box component='span' sx={{fontWeight: 600, mr: 1}}>{bText}</Box>
        {children}
    </Box>
}

const termsUseTexts = [
    {
        title: 'Services Description; Independent Contractor',
        desc: <span>The Services provide a platform (the “<span className='highlight'>freightdok Platform</span>”) that includes tools for trucking operations, including but not limited to technology intended to assist in an independent contractor owner-operator relationship. Any guidance we provide as part of our Services is solely informational and you may decide to follow it or not. In addition, you understand and agree that you are an independent contractor, and no form of joint employer, joint venture, partnership, or similar relationship between you and us is intended or created under your Agreement with us. As an independent contractor, you are solely responsible for: (a) determining the means and methods for performing your transport services; and (b) persons employed or otherwise engaged by you for the performance of your transport services, including responsibility for all applicable employee-related tax, salary, and benefit programs.\n</span>
    },
    {
        title: 'General Provisions',
        liDesc: [
            {
                title: 'Authorized Users and Accounts',
                desc: <span>If you are registering an account on the freightdok Platform (an “Account”) as an administrator of the Services on behalf of a Customer entity, (a) you represent and warrant that you have the authority to legally bind the entity and to grant us all permissions and licenses provided in this Agreement; (b) the words “you” and “your” used in this Agreement mean Customer, i.e., the entity registering the Account, in addition to each individual authorized by the entity to access the Services (an “Authorized User”); (c) you are responsible for administering Customer’s access to the Services by adding and
                    removing <br/> Authorized Users at the Customer’s direction; and (d) you shall not allow access to or use of the Services by anyone other than Authorized Users.Authorized Users agree to: (i) not share your Account or transfer any part of it to anyone else; (ii) provide accurate, current and complete information during the registration process and keep your Account
                    information up-to-date; and (iii) keep any codes we provide you to access the Services (“Access Codes”) secure and confidential.
                    You agree to notify us immediately of any unauthorized use of your Account and are responsible for anything that happens through your
                    Account prior to closing it or reporting misuse to us. Customer is responsible for Authorized Users’ compliance with this Agreement,
                    including for ensuring that Authorized Users maintain the confidentiality of Access Codes and user names.</span>
            },
            {
                title: 'Customer Content',
                desc: <span>Authorized Users may submit content or information to the Services, which includes
                    Personal Information (as defined in Section 2.5 (Privacy Policy and Protection of Personal Information) below) and
                    User Content (as defined in Section 3.2(c) (License to User Content) below) (collectively, “<span
                        className='highlight'>Customer Content</span> ”),
                    and Customer will have the sole right and responsibility for managing your use of it. Customer will (a) inform
                    Authorized Users of all Customer policies and practices that are relevant to their use of the Services and of any settings that may impact the processing of Customer Content; and (b) obtain all rights, permissions and/or consents from Authorized Users and other Customer personnel that are necessary to grant the rights and licenses in the Agreement and for the lawful use and transmission of Customer Content and the operation of the Services.</span>
            },
            {
                title: 'Subscriptions',
                desc: <span>A subscription allows Customer and its Authorized Users to access the Services. A subscription may be procured through the Services interface,
                    or in some cases, via an order form entered into between Customer and us (each, an “<span
                        className='highlight'>Order FormOrder Form</span>”). Subscriptions commence when we make the
                    Services available to Customer and continue for the term specified in the Services or in the Order Form, as applicable, or as earlier terminated as described below
                    (the “<span className='highlight'>Initial Subscription Period</span>”). A “<span
                        className='highlight'>Renewal Subscription Period</span>” means a period of time equivalent to one (1) year or the Initial Subscription Period,
                    whichever is shorter (the Initial Subscription Period collectively with any Renewal Subscription Periods shall be referred to as the “<span
                        className='highlight'>Subscription Period</span>”).
                    Please read the “<span className='highlight'>Auto-Renewals</span>”
                    Section 5.2 below to learn more about automatic renewals of the Initial Subscription Period and any Renewal Subscription Periods.</span>
            },
            {
                title: 'Feedback',
                desc: <span>‍Customer and its Authorized Users may choose to, or we may invite them to, submit comments or ideas about the Services,
                    including without limitation about how to improve the Services or our products (“<span
                        className='highlight'>Ideas</span>”). By submitting any Idea, Customer agrees that
                    its disclosure is gratuitous, unsolicited and without restriction and will not place us under any fiduciary or other obligation, and that we are free to use the Idea without any compensation, whether to Customer, the Authorized User, or anyone else, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. Customer further acknowledges that, by acceptance of the submission, we do not waive any rights to use similar or related ideas previously known to us,
                    or developed by our personnel, or obtained from sources other than Customer or its Authorized Users.</span>
            },
            {
                title: 'Privacy Policy and Protection of Personal Information',
                desc: <span>‍Please review our Privacy Policy for more information on how we collect and use data relating to the use and performance of our websites, services, and products, including personal information about our Customers and Authorized Users.
                    <br/>
                    We will process any information relating to identified or identifiable natural persons, which is included in the Customer Content
                    (<span className='highlight'>Personal Information</span>) in accordance with the terms of the Privacy Policy. We will not process Personal Information
                    for other purposes without your prior written instruction. You acknowledge and agree that processing based on the provisions in the Agreement and in the
                    product documentation for the Services (the <span className='highlight'>Documentation</span>) qualify as Customer’s instruction. Generally, Personal Information means any information
                    relating to an identified or identifiable natural person who can be identified, directly or indirectly, in particular by reference to an identifier such
                    as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological,
                    genetic, mental, economic, cultural or social identity of that natural person, and/or <span
                        className='highlight'>Personal Information</span>, “personally identifiable information,”
                    or such other similar term under applicable privacy or data protection laws that apply to such person.
                     <br/>
                    The protection of Personal Information is important to us. Accordingly, we will maintain reasonable administrative, physical, and technical safeguards designed to protect Personal Information. In the event we have a reasonable, good faith belief that an unauthorized party has accessed Personal Information, we will promptly notify Customer and will use reasonable efforts to cooperate with Customer’s investigation of the incident. If such incident triggers any third-party notice requirements, Customer (not us) shall be solely responsible for the timing, content, cost and method of any such notice in compliance with applicable laws. Customer (not us) bears sole responsibility for adequate security, protection and backup of Personal Information when in Customer’s or its representatives’ or agents’ possession or control. We are not responsible, and Customer is fully responsible, for what Customer’s Authorized Users do with Personal Information.
                    <br/>
                    We are custodians of Personal Information. During the Subscription Period, Customer will be permitted to export or share certain Personal Information from the Services; provided, however, that Customer acknowledges and agrees that the ability to export or share Personal Information may be limited or unavailable depending on the type of Services plan in effect and the data retention settings enabled.
                </span>
            },
            {
                title: 'Privacy Policy and Protection of Personal Information',
                desc: <span>‍Please review our Privacy Policy for more information on how we collect and use data relating to the use and performance of our websites, services, and products, including personal information about our Customers and Authorized Users.
                    <br/>
                    We will process any information relating to identified or identifiable natural persons, which is included in the Customer Content
                    (<span className='highlight'>Personal Information</span>) in accordance with the terms of the Privacy Policy. We will not process Personal Information
                    for other purposes without your prior written instruction. You acknowledge and agree that processing based on the provisions in the Agreement and in the
                    product documentation for the Services (the <span className='highlight'>Documentation</span>) qualify as Customer’s instruction. Generally, Personal Information means any information
                    relating to an identified or identifiable natural person who can be identified, directly or indirectly, in particular by reference to an identifier such
                    as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological,
                    genetic, mental, economic, cultural or social identity of that natural person, and/or <span
                        className='highlight'>Personal Information</span>, “personally identifiable information,”
                    or such other similar term under applicable privacy or data protection laws that apply to such person.
                     <br/>
                    The protection of Personal Information is important to us. Accordingly, we will maintain reasonable administrative, physical, and technical safeguards designed to protect Personal Information. In the event we have a reasonable, good faith belief that an unauthorized party has accessed Personal Information, we will promptly notify Customer and will use reasonable efforts to cooperate with Customer’s investigation of the incident. If such incident triggers any third-party notice requirements, Customer (not us) shall be solely responsible for the timing, content, cost and method of any such notice in compliance with applicable laws. Customer (not us) bears sole responsibility for adequate security, protection and backup of Personal Information when in Customer’s or its representatives’ or agents’ possession or control. We are not responsible, and Customer is fully responsible, for what Customer’s Authorized Users do with Personal Information.
                    <br/>
                    We are custodians of Personal Information. During the Subscription Period, Customer will be permitted to export or share certain Personal Information from the Services; provided, however, that Customer acknowledges and agrees that the ability to export or share Personal Information may be limited or unavailable depending on the type of Services plan in effect and the data retention settings enabled.
                </span>
            },
            {
                title: 'Location Data',
                desc: <span>To provide the Services, we may collect location data from you and your Authorized Users, including
                    specific information such as your or your Authorized Users’ IP addresses, and latitude/longitude coordinates
                    (including but not limited to GPS/GNSS). Customer acknowledges and agrees that we may use and retain this data to provide
                    and improve our products and services, subject to our Privacy Policy .
                </span>
            }, {
                title: 'Notifications and Communications',
                desc: <span>We will communicate with you via fax, phone call, text (SMS) message, email or push notifications in order that we may provide the Services,
                    service your Account, reasonably address matters pertaining to your Account or for other purposes reasonably related to the Services and our business,
                    including but not limited to notifying you about upcoming loads and sending you marketing-related messages.
                </span>
            },
            {
                title: 'Calls and SMS text messages.',
                desc: <span> By creating an Account or using the Services you expressly consent and agree to accept and receive communications from us,
                    including via fax, text (SMS) messages and phone calls at any of your landline or mobile phone number you provided, even if you are listed
                    on any federal, state, provincial or other applicable “Do Not Call” list, in order that we may provide the Services, including but not limited to
                    operational communications concerning your Account or use of the Services, information  concerning new and existing loads and features on the Services,
                    and other Services-related notifications and communications.  With your consent, we may also send you promotional calls or text messages containing news
                    and special offers, discounts or other promotional or commercial content <span
                        className='highlight'>Promotional Calls</span>.  By consenting to being contacted by us,
                    you understand and expressly authorize us to send you these communications, including live calls from an operator, or pre-recorded or
                    auto-generated voice messages, or SMS text messages, and that we may use automated telephone dialing systems to deliver these messages
                    sent by or on behalf of us, our affiliates, subsidiaries and/or our staff, employees, contractors and agents. Standard rates and charges for all
                    calls or texts, as applied by your cell phone carrier, will apply to text messages and calls. You represent that you have received, and are
                    authorized to convey to us, the consent of any Authorized Users on your Account to be contacted by us as described in this section.
                    You agree that all consents provided in this section will survive cancellation of your Account.
                    You acknowledge that you are not required to consent to receive Promotional Calls as a condition of using the Services.
                    You may opt-out of receiving all Promotional Calls (including pre-recorded or live calls or SMS text messages)
                    at any time by replying “STOP Ads” to any text messages from us or by contacting us at help@freightdok.io.
                    You may opt-out of receiving all text messages from us (including informational or transactional messages) by replying with the word “STOP”
                    to a text message from us; however, you acknowledge that opting out of receiving all text messages will prohibit us from contacting you
                    with necessary Services-related messages including Access Codes, and as such, opting out of receiving all text messages will suspend your
                    use of the Services until you contact us at <a
                        href={`mailto:${EMAIL_FREIGHTDOK_HELP}`}>help@freightdok.io</a> to reinstate our ability to text you Access Codes.
                </span>
            },
            {
                title: 'Email communications.',
                desc: <span> We may send you confirmation and other transactional emails regarding the Services.
                    We may also send you emails about other services that we think might interest you <span
                        className='highlight'>Promotional Emails</span>.
                    You can unsubscribe from Promotional Emails at any time by clicking unsubscribe in our email communications or contacting us at <a
                        href={`mailto:${EMAIL_FREIGHTDOK_HELP}`}>help@freightdok.io</a>
                </span>
            },
        ]
    },
    {
        title: 'Services Usage and Restrictions',
        liDesc: [
            {
                title: 'Our License to Customer',
                liDesc: [
                    {
                        title: 'Ownership of the Services, Documentation, and Company Data',
                        desc: <span>
                            We own and will continue to own our Services and Documentation, including all related intellectual property and other proprietary rights related thereto. Further, Customer acknowledges and agrees that we may collect data relating to Customer’s and its Authorized Users’ usage of the Services, including but not limited to time spent on the Services, mouse clicks, and call frequency (“Usage Data”) and collect, analyze, and use data derived from User Content (as defined in Section 3.2 (License to User Content) below) that has been aggregated and/or anonymized such that it does not identify Customer or any identifiable individual person (“Derivative Data” and, collectively with Usage Data, “Company Data”). All Company Data will be owned solely and exclusively by us and, for purposes of clarity, you agree that we may use the Company Data in perpetuity for any purpose permitted by applicable law.
                            <br/>
                            We may, from time to time, make available certain third-party products and services, including but not limited to open source software (“Third-Party Products”) for use in connection with the Services. Such Third-Party Products may be made available under separate or additional terms and conditions, including but not limited to open source licenses, which we will make available to you as necessary.

                        </span>
                    },
                    {
                        title: 'Licenses to the Services and Documentation',
                        desc: <span>
                            During the Subscription Period, we grant the Customer a non-exclusive, non-transferable license to access and use, and to permit Authorized Users to access and use the Services, in accordance with the Agreement, for the Customer's own internal business purposes.
                            <br/>
                            <br/>
                            To the extent that we may make downloadable software components available, via app stores or other channels, as part of the Services, we grant to Customer during the Subscription Period a non-sublicensable, non-transferable, non-exclusive, limited license for Customer and its Authorized Users to use the object code version of these components, solely as necessary to use the Services. Minor updates, bug fixes, and the like to such downloadable software components will be included under this license during the Subscription Period.
                            <br/>
                            <br/>
                            From time to time we may make available Documentation via a method of our choosing (e.g., via the Services). During the Subscription Period, we grant to Customer a non-sublicensable, non-transferable, non-exclusive, limited license for Customer and its Authorized Users to use the Documentation to support Customer’s and its Authorized Users’ use of the Services.All rights and licenses granted herein are subject to your and your Authorized Users’ full compliance with all of the terms and conditions of the Agreement.
                            <br/>
                            <br/>
                            All rights in the Services and Documentation not expressly granted herein are expressly reserved by us.
                        </span>
                    },
                ]
            },
            {
                title: 'Customer’s Licenses to Us',
                liDesc: [
                    {
                        title: 'Ownership of Customer Content',
                        desc: <span>As between us on the one hand, and Customer and any Authorized Users on the other,
                            Customer will own all Customer Content, including, for purposes of clarity, Personal Information and User Content.</span>
                    },{
                        title: 'License to Personal Information',
                        desc: <span>Subject to the terms and conditions of the Agreement, Customer (for itself and all of its Authorized Users) grants us a worldwide,
                            non-exclusive, limited term license to access, use, process, copy, distribute, perform, export and display Personal Information,
                            only as reasonably necessary (i) to provide and maintain the Services; (ii) to prevent or address service, security, support or technical issues;
                            (iii) as required by law; and (iv) as expressly permitted in writing by Customer. Customer represents and warrants that it has secured all
                            rights in and to Personal Information from its Authorized Users or any third parties as may be necessary to grant this license.
                            <br/>
                            <br/>
                            Notwithstanding the foregoing, Customer agrees that we may collect, analyze, use and disclose, during or after the Subscription Period, data derived from Personal Information, which is anonymized and/or aggregated in any manner that makes the identification of Customer or any Authorized User or third party impossible, for any business purpose, including without limitation, to operate, analyze, improve, and market the Services and our other products and services and share such anonymized data with our affiliates and business partners. Customer further agrees that we will have the perpetual right to use, store, transmit, distribute, modify, copy, display, sublicense, and create derivative works of such derived data.</span>
                    },{
                        title: 'License to User Content',
                        desc: <span>With respect to that portion of Customer Content that consists of videos, images, music, comments, questions, documents,
                            spreadsheets, business terms, information, and any other content submitted, posted, or otherwise made available by Customer and its
                            Authorized Users through the Services <span className='highlight'>User Content</span>, by submitting, posting, storing, or otherwise making such User Content available
                            through the Services, Customer grants, and represents and warrants that it has all rights necessary to grant (including without limitation
                            any necessary consents and authorizations from individual persons identified in theUser Content and licenses from third-parties whose content
                            is included in the User Content) to us a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide
                            license to use, host, store, reproduce, modify, publish, list information regarding, translate, distribute, publicly perform, publicly display,
                            and make derivative works of all such User Content, and the names, voice, and/or likeness contained in the User Content, in whole or in
                            part, and in any form, media, or technology, whether now known or hereafter developed, solely for use in connection with our provision of
                            the Services as described in the Agreement and any Documentation.
                            <br/>
                            To the extent permitted under applicable law, we take no responsibility and assume no liability for any User Content that Customer
                            or any Authorized User or third party submits, posts, or otherwise makes available through the Services. As between Customer and us,
                            Customer shall be fully responsible for the User Content and the consequences of submitting, posting, or otherwise making it available
                            via the Services, and Customer acknowledges and agrees that we are acting only as a passive conduit for Customer’s and its
                            Authorized Users’ online distribution of such User Content.</span>
                    },
                ]
            },
            {
                title: 'Responsibilities for Customer Content',
                desc: <span>
                    We are not responsible for the content of any Customer Content or the way Customer or its Authorized Users choose to use the Services to store or process any
                    Customer Content. Customer represents and agrees that Customer is solely responsible for (a) providing notices and obtaining consents as legally
                    required from its Authorized Users and any third parties for the collection, use, processing and transfer of Customer Content in connection with the Services; and
                    (b) ensuring compliance with all laws in all jurisdictions that may apply to Customer Content provided hereunder, including but not limited to all
                    applicable international, federal, state, provincial and local laws, rules, and regulations relating to data privacy and security. Unless otherwise agreed
                    to in writing (e.g., in a Lease Agreement), Customer may not submit any Customer Content that includes a social security number, passport number, driver’s
                    license number, or similar identifier, credit card or debit card number, or any other information which may be subject to specific data privacy and security
                    laws including, but not limited to, the Gramm-Leach-Bliley Act (GLBA), the Health Insurance Portability and Accountability Act (HIPAA), the Health Information
                    Technology for Economic and Clinical Health Act (HiTECH), the Family Educational Rights and Privacy Act of 1974 (FERPA), the Children's
                    Online Privacy Protection Act (COPPA),or the GDPR or any other data which is considered to be sensitive or which could give rise to notification obligations
                    under data breach notification laws. We do not make any representations as to the adequacy of the
                    Services to process your Customer Content or to satisfy any legal or compliance requirements which may apply to your Customer Content, other than as described herein.
                </span>
            },
            {
                title: 'Use of the Services',
                desc: <span>Customer must comply with the Agreement and ensure that its Authorized Users comply with the Agreement. We may review conduct
                    for compliance purposes, but we have no obligation to do so unless, and to the extent, required by law. If we believe there is a violation of the
                    Agreement that can be remedied by Customer’s removal of certain Customer Content, we will, in most cases, ask Customer to take direct action rather
                    than intervene. However, to the extent legally permissible, we reserve the right to take further appropriate action, when we deem it reasonably appropriate
                    if Customer does not take appropriate action, or if we believe there is a credible risk of harm to us, the Services, Authorized Users, or any third parties.</span>
            },
            {
                title: 'Acceptable Use',
                liDesc: [
                    {
                        title: 'Technical Restrictions',
                        desc: <span>
                            You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the
                            Services in any medium, including without limitation by any automated or non-automated “scraping”; (ii) using any automated system,
                            including without limitation “robots,” “spiders,” “offline readers,” etc., to access the Services in a manner that sends more request
                            messages to the servers hosting the Services than a human can reasonably produce in the same period of time by using a conventional on-line
                            web browser; (iii) transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere with, compromise the system
                            integrity or security or decipher any transmissions to or from the servers running the Services; (v) taking any action that imposes, or may impose
                            at our sole discretion an unreasonable or disproportionately large load on our infrastructure; (vi) uploading invalid data, viruses, worms, or
                            other software agents through the Services; (vii) collecting or harvesting any personally identifiable information, including Account names, from
                            the Services; (viii) using the Services for any commercial solicitation purposes; (ix) impersonating another person or entity or otherwise
                            misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity;
                            (x) interfering with the proper working of the Services; (xi) accessing any content on the Services through any technology
                            or means other than those provided or authorized by the Services; or (xii) bypassing the measures we may use to prevent or
                            restrict access to the Services, including without limitation features that prevent or restrict use or copying of any content or enforce
                            limitations on use of the Services or the content therein.
                        </span>
                    }, {
                        title: ' Customer Content Restrictions',
                        desc: <span>
                            You are solely responsible for the content of any Customer Content you submit through the Services.
                            You agree not to submit any Customer Content, including but not limited to any User Content, that:
                            (i) may create a risk of harm, loss, physical or mental injury, emotional distress, death, disability,
                            disfigurement, or physical or mental illness to you, to any other person, or to any animal;
                            (ii) may create a risk of any other loss or damage to any person or property;
                            (iii) seeks to harm or exploit children by exposing them to inappropriate content, asking for personally
                            identifiable details or otherwise;
                            (iv) may constitute or contribute to a crime or tort;
                            (v) contains any information or content that we deem to be unlawful, harmful, abusive, racially or ethnically offensive,
                            defamatory, infringing, invasive of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise),
                            libelous, threatening, profane, obscene, or otherwise objectionable;
                            (vi) contains any information or content that is illegal (including, without limitation,
                            the disclosure of insider information under securities law or of another party’s trade secrets);
                            (vii) contains any information or content that you do not have a right to make available under applicable law or
                            under contractual or fiduciary relationships; (viii) contains any information or content that you know is not correct and/or current; or
                            (ix) to the extent applicable, violates any school or other applicable policy, including those related to cheating or ethics.
                            <br/>
                            <br/>
                            You agree that any Customer Content that you submit does not and will not violate third-party rights of any kind, including without limitation any intellectual property rights or rights of privacy.
                            <br/>
                            <br/>
                            You are solely responsible for the content of any Customer Content you submit through the Services. You agree not to submit any Customer Content, including but not limited to any User Content, that: (i) may create a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to you, to any other person, or to any animal; (ii) may create a risk of any other loss or damage to any person or property; (iii) seeks to harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or otherwise; (iv) may constitute or contribute to a crime or tort; (v) contains any information or content that we deem to be unlawful, harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise), libelous, threatening, profane, obscene, or otherwise objectionable; (vi) contains any information or content that is illegal (including, without limitation, the disclosure of insider information under securities law or of another party’s trade secrets); (vii) contains any information or content that you do not have a right to make available under applicable law or under contractual or fiduciary relationships; (viii) contains any information or content that you know is not correct and/or current; or (ix) to the extent applicable, violates any school or other applicable policy, including those related to cheating or ethics.
                            <br/>
                            <br/>
                            You agree that any Customer Content that you submit does not and will not violate third-party rights of any kind, including without limitation any intellectual property rights or rights of privacy.

                        </span>
                    },
                ]
            }
        ]
    },
    {
        title: 'Payment Obligations',
        liDesc: [
            {
                title: 'Payment Terms',
                desc: <span>
                    In the event we make the Services available on a stand-alone basis any fees that we may charge for such stand-alone access will be specified through the
                    Services interface or in the Order Form(s) and must be paid in advance. Payment obligations are non-cancelable and, except as expressly stated in the Agreement,
                    fees paid are non-refundable. For clarity, in the event Customer downgrades any subscriptions from a paid plan to a free plan, Customer will remain responsible for
                    any unpaid fees under the paid plan, and Services under the paid plan will be deemed fully performed and delivered upon expiration of the Initial Subscription Period.
                    If we agree to invoice Customer by email, full payment must be received within thirty
                    (30) days from the invoice date. Fees are stated exclusive of any taxes, levies, duties, or
                    similar governmental assessments of any nature, including, for example, value-added, sales, use or withholding taxes, assessable by any
                    jurisdiction (collectively, <span className='highlight'>Taxes</span> ).
                    Customer will be responsible for paying all Taxes associated with its purchases, except for those taxes based on our net income.
                </span>
            },{
                title: 'Billing Policies',
                desc: <span>
                    Customer agrees to the pricing communicated to you by us for access to our Services.
                    We may add new services that carry additional fees and charges, or add or amend fees and charges for existing services,
                    at any time in our sole discretion, by giving to the Customer at least 60 days' written notice, such increase to take effect
                    at the beginning of the next billing cycle. If the Customer is unhappy with the increase, the Customer may give notice to
                    terminate the Agreement, by giving at least 30 days' written notice to us, such notice to expire no later than the end of
                    the then-current billing cycle. The fees will not increase during the notice period; otherwise, any change to such pricing
                    shall become effective in the billing cycle following notice of such change as provided under the Agreement.

                </span>
            },{
                title: 'Payment Information',
                desc: <span>
                    We may use a third-party payment processor (“Payment Processor”)
                    to process payments you make in connection with the Services. Please see Payment Processor’s privacy statement available on its website for information on how Payment
                    Processor collects and uses personal information. Payment must be received by Payment Processor before our acceptance of an order, and must use one of the payment methods accepted by the Payment Processor. We do not view or store your full credit card or other payment method information. For all payments, Payment Processor will collect your payment method details and charge your chosen payment method in connection with an order. You acknowledge and agree that we are not responsible for any security or privacy breaches of your credit card or other payment method.
                    <br/>
                    <br/>
                    You represent and warrant that: (a) the Account, order, and payment method information you supply to us or to Payment Processor, as applicable, is true, correct, current, and complete; (b) you are duly authorized to use such payment method; (c) you will pay any charges that you incur in connection with the Services, including any applicable taxes; (d) charges incurred by you will be honored by your payment method company; (e) you will pay all charges incurred by you at the posted prices, including all applicable Taxes, if any; (f) you will not allow anyone other than your Authorized Users to use your subscription; (g) you will not transfer your subscription to anyone else; and (h) you will report to us any unauthorized or prohibited access or use of your subscription or of any Access Codes (or other login credentials).
                    <br/>
                    <br/>
                    If any of your Account, order, or payment method information changes, you agree to promptly update this information, so that we or Payment Processor may complete your transactions and contact you as needed. We are not liable for any unauthorized use of your credit card, debit card, or other payment method by a third-party in connection with your use of the Services or your subscription.
                </span>
            },
        ]
    },
    {
        title: 'Term and Termination',
        liDesc: [
            {
                title: 'Agreement Term',
                desc: <span>
                    As further described below, a free subscription continues until terminated, while a paid subscription has a Subscription Period
                    that may expire or be terminated. The Agreement remains effective until all subscriptions ordered under the Agreement have expired or
                    been terminated, or the Agreement itself terminates. Termination of the Agreement will terminate all subscriptions and all Order Forms.
                </span>
            },{
                title: 'Billing Policies',
                desc: <span>
                    Customer agrees to the pricing communicated to you by us for access to our Services.
                    We may add new services that carry additional fees and charges, or add or amend fees and charges for existing services,
                    at any time in our sole discretion, by giving to the Customer at least 60 days' written notice, such increase to take effect
                    at the beginning of the next billing cycle. If the Customer is unhappy with the increase, the Customer may give notice to
                    terminate the Agreement, by giving at least 30 days' written notice to us, such notice to expire no later than the end of
                    the then-current billing cycle. The fees will not increase during the notice period; otherwise, any change to such pricing
                    shall become effective in the billing cycle following notice of such change as provided under the Agreement.

                </span>
            },{
                title: 'Auto-Renewal',
                desc: <span>
                    UNLESS OTHERWISE SET FORTH IN AN ORDER FORM, (A) THE INITIAL SUBSCRIPTION PERIOD AND ANY RENEWAL SUBSCRIPTION PERIODS RENEW FOR ADDITIONAL RENEWAL
                    SUBSCRIPTION PERIODS; AND (B) THE PER-UNIT PRICING DURING ANY AUTOMATIC RENEWAL SUBSCRIPTION PERIOD WILL BE THE THEN-CURRENT PRICE COMMUNICATED TO YOU BY US.
                    EITHER PARTY CAN GIVE THE OTHER NOTICE OF NON-RENEWAL AT LEAST THIRTY (30) DAYS BEFORE THE END OF THE INITIAL SUBSCRIPTION PERIOD OR THE THEN-CURRENT RENEWAL
                    SUBSCRIPTION PERIOD, AS APPLICABLE, TO STOP A SUBSCRIPTION FROM AUTOMATICALLY RENEWING. When you procure a subscription, you expressly acknowledge and agree that:
                    (1) we are authorized to charge you at the beginning of the Initial Subscription Period or applicable Renewal Subscription Period the fees for the
                    Services, any applicable Taxes, and any other charges you may incur in connection with your use of the Services, for as long as your subscription continues; and
                    (2) your subscription is continuous until the Services are suspended, discontinued or terminated in accordance with the Agreement. You acknowledge and agree
                    that the amount billed may vary due to promotional offers, changes in your subscription plan, changes in applicable taxes, and changes in fees in
                    accordance with Section 4 and you authorize us or Payment Processor, as applicable, to charge your payment method for the changed amounts
                </span>
            },{
                title: 'Termination for Cause',
                desc: <span>
                    We or Customer may terminate the Agreement on notice to the other party if the other party materially breaches the Agreement
                    and such breach is not cured within thirty (30) days after the non-breaching party provides notice of the breach. Customer is
                    responsible for its Authorized Users, including for any breaches of the Agreement caused by its Authorized Users. We may terminate the
                    Agreement immediately on notice to
                    Customer if we reasonably believe that the Services are being used by Customer or its Authorized Users in violation of applicable law.
                </span>
            },{
                title: 'Termination Without Cause',
                desc: <span>
                    Customer may terminate its free subscriptions immediately without cause. We may terminate the Agreement without cause, but we will provide Customer with thirty
                    (30) days prior written notice and refund Customer any prepaid fees covering the remainder of the Subscription Period after the effective date of termination.
                </span>
            },
            {
                title: 'Effect of Termination',
                desc: <span>
                    Upon any termination for cause by Customer, we will refund Customer
                    any prepaid fees covering the remainder of the Subscription Period after the effective date of termination. Upon any termination for cause by us, Customer will pay any unpaid fees covering the remainder of the Subscription Period after the effective date of termination.
                    In no event will any termination relieve Customer of the obligation to pay any fees payable to us for the period prior to the effective date of termination.
                </span>
            },{
                title: 'Representations; Disclaimer of Warranties',
                desc: <span>
                    Customer represents and warrants that it has validly entered into the Agreement and has the legal power to do so.
                    Customer further represents and warrants that it is responsible for the conduct of its Authorized Users and their compliance
                    with the terms of the Agreement. EXCEPT AS EXPRESSLY PROVIDED FOR HEREIN, THE SERVICES AND ALL RELATED COMPONENTS AND INFORMATION ARE
                    PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, AND WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES,
                    WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    CUSTOMER ACKNOWLEDGES THAT WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.SOME JURISDICTIONS
                    DO NOT ALLOW THE DISCLAIMER OF CERTAIN TYPES OF WARRANTIES, SO THE ABOVE DISCLAIMERS MAY NOT APPLY TO YOU. THE AGREEMENT GRANTS SPECIFIC LEGAL RIGHTS,
                    AND CUSTOMER AND AUTHORIZED USERS MAY ALSO HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION. THE FOREGOING DISCLAIMERS WILL NOT APPLY TO THE
                    EXTENT PROHIBITED BY APPLICABLE LAW.
                </span>
            },{
                title: 'Limitation of Liability',
                desc: <span>
                    IN NO EVENT WILL OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THE AGREEMENT (WHETHER IN CONTRACT OR TORT OR UNDER ANY OTHER THEORY OF LIABILITY) EXCEED THE TOTAL AMOUNT PAID BY CUSTOMER HEREUNDER IN THE TWELVE (12) MONTHS PRECEDING THE LAST EVENT GIVING RISE TO LIABILITY. THE FOREGOING WILL NOT LIMIT CUSTOMER’S PAYMENT OBLIGATIONS UNDER THE “PAYMENT TERMS” SECTION ABOVE.
                    <br/>
                    <br/>
                    IN NO EVENT WILL WE HAVE ANY LIABILITY TO YOU OR TO ANY THIRD PARTY FOR ANY LOST PROFITS OR REVENUES OR FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER OR PUNITIVE DAMAGES HOWEVER CAUSED, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    <br/>
                    <br/>
                    The limitations under this “Limitation of Liability” section apply with respect to all legal theories, whether in contract, tort or otherwise, and to the extent permitted by law. The provisions of this “Limitation of Liability” section allocate the risks under the Agreement between the parties, and the parties have relied on these limitations in determining whether to enter into the Agreement and the pricing for the Services.
                    <br/>
                    <br/>
                    SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN TYPES OF DAMAGES, SUCH AS INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
                    LIMITATIONS MAY NOT APPLY TO YOU. THE AGREEMENT GRANTS SPECIFIC LEGAL RIGHTS, AND CUSTOMER AND AUTHORIZED USERS MAY ALSO HAVE OTHER RIGHTS THAT VARY FROM
                    JURISDICTION TO JURISDICTION. THE FOREGOING DISCLAIMERS AND LIMITATIONS WILL NOT APPLY TO
                    THE EXTENT PROHIBITED BY APPLICABLE LAW <span className='highlight'>Limitation of Liability</span>
                </span>
            },{
                title: 'Indemnification',
                desc: <span>
                    ‍Customer agrees to defend, indemnify and hold harmless us and our
                    affiliates, licensors, and suppliers, and our and their respective employees, contractors,
                    agents, officers and directors, from and against any and all claims, damages, obligations, losses,
                    liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from:
                    (1) Customer’s and any Authorized User’s use of and access to the Services, including any Customer Content or other
                    content transmitted or received by Customer or any Authorized User; (2) your violation of any term of the Agreement,
                    including without limitation any breach of Customer’s representations and warranties above; (3) Customer’s or any
                    Authorized User’s violation of any third-party right, including without limitation any right of privacy or intellectual property rights; (4) Customer’s or any Authorized User’s violation of any applicable law, rule or regulation; (5) Customer Content or any content that is submitted via Customer’s or any Authorized User’s Account, including without limitation misleading, false, or inaccurate information; (6) Customer’s or any Authorized User’s gross negligence, fraud, or willful misconduct; or (7) any other party’s access and use of the Services with Customer’s or any Authorized User’s unique username, Access Code or other appropriate security code (provided that such access and use was not our fault).

                </span>
            },
        ],
    },
    {
        title: 'Confidentiality',
        liDesc: [
            {
                title: 'Definition',
                desc: <span>
                    Each party <span className='highlight'>Disclosing Party</span> may disclose <span className='highlight'>Confidential Information</span> to the other party <span className='highlight'>Receiving Party </span>
                    in connection with the Agreement, which is anything that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure including all Order Forms, as well as non-public business, product, technology and marketing information. Confidential Information of Customer includes Customer Content. If something is labeled “Confidential,” that’s a clear indicator to the Receiving Party that the material is confidential. Notwithstanding the above, Confidential Information does not include information that (a) is or becomes generally available to the public without breach of any obligation owed to the Disclosing Party; (b) was known to the Receiving Party prior to its disclosure by the Disclosing Party without breach of any obligation owed to the Disclosing Party; (c) is received from a third party without breach of any obligation owed to the Disclosing Party; or (d) was independently developed by the Receiving Party, as demonstrated by files in existence at the time of such independent development.

                </span>
            },{
                title: 'Protection and Use of Confidential Information',
                desc: <span>
                    The Receiving Party will (a) take at least reasonable measures to prevent the unauthorized disclosure or use of Confidential Information, and
                    limit access to those employees, affiliates and contractors who need to know such information in connection with the Agreement; and (b) not use or disclose any Confidential Information of the Disclosing Party for any purpose outside the scope of the Agreement. Nothing above will prevent either party from sharing Confidential Information with financial and legal advisors; provided,
                    however, that the advisors are bound to confidentiality obligations at least as restrictive as those in the Agreement.
                </span>
            },{
                title: 'Compelled Access or Disclosure',
                desc: <span>
                    The Receiving Party may access or disclose Confidential Information of the Disclosing Party if it is required by law; provided, however, that the Receiving Party gives the Disclosing Party prior notice of the compelled access or disclosure (to the extent legally permitted) and reasonable assistance, at the Disclosing Party's cost, if the Disclosing Party wishes to contest the access or disclosure. If the Receiving Party is compelled by law to access or disclose the Disclosing Party’s Confidential Information, the Disclosing Party will reimburse the Receiving Party for its reasonable cost of compiling and providing access to such Confidential Information as well as the reasonable cost for any support provided in connection with the Disclosing Party seeking a protective order or confidential treatment for the Confidential Information to be produced. Customer agrees that no part of this Section 9 shall be construed to limit or in any way restrain freightdok compliance with its obligation to disclose equipment and driver information as required to comply with applicable laws including the Federal Motor Carrier Safety Regulations set forth at 49 CFR Parts 350-399.
                </span>
            },
        ]
    },
    {
        title: 'Miscellaneous',
        liDesc: [
            {
                title: 'Publicity',
                desc: <span>
                    Customer hereby grants to us a nonexclusive, non-transferable (except in compliance with Section 10.9 (Assignment)) license to use, reproduce, and display Customer’s name, logo, service marks, trademarks, and related brand features (“Marks”) on or within the user interface of the Services, including as made available to actual or potential customers, as well as in marketing and promotional materials. We will use such Marks in compliance with any reasonable written usage guidelines provided to us by Customer.
                </span>
            },{
                title: 'Third Party Products, Links, and Information',
                desc: <span>
                    The Services may integrate with, or contain, third-party products, services, materials, or information, or links thereto
                    that are not owned or controlled by us (“Third-Party Materials”). We do not endorse or assume any responsibility for any such Third-Party Materials.
                    If Customer or any Authorized User accesses any third-party website or service, it does so at its own risk, and Customer acknowledges and
                    agrees that the Agreement and our Privacy Policy do not apply to Customer or any Authorized User’s use of such sites or services.
                    Customer expressly relieves us from any and all liability arising from its or its Authorized Users’ use of any Third-Party Materials.
                    The Services may integrate with, or contain, third-party products, services, materials, or information, or
                    links thereto that are not owned or controlled by us <span className='highlight'>Third-Party Materials</span>. We do not endorse or assume any responsibility for any such Third-Party Materials. If Customer or any Authorized User accesses any third-party website or service, it does so at its own risk, and Customer acknowledges and agrees that the Agreement and our Privacy Policy do not apply to Customer or any Authorized User’s use of such sites or services. Customer expressly relieves us from any and all liability arising from its or its Authorized Users’ use of any Third-Party Materials.
                </span>
            },{
                title: 'Force Majeure',
                desc: <span>
                    Customer hereby grants to us a nonexclusive, non-transferable (except in compliance with Section 10.9 (Assignment)) license to use, reproduce, and display Customer’s name, logo, service marks, trademarks, and related brand features (“Marks”) on or within the user interface of the Services, including as made available to actual or potential customers, as well as in marketing and promotional materials. We will use such Marks in compliance with any reasonable written usage guidelines provided to us by Customer.
                </span>
            },{
                title: 'Relationship of the Parties; No Third-Party Beneficiaries',
                desc: <span>
                    Neither us nor Customer will be liable by reason of any failure or delay in the performance of its obligations on account of events beyond the reasonable control of a party, which may include denial-of-service attacks, a failure by a third-party hosting provider or utility provider, boycott efforts, fires, floods, freezes, earthquakes, accidents, war (whether or not declared), revolution, riots, insurrections, acts of God, acts of government (including without limitation any agency or department of the United States of America), acts of the public enemy, scarcity or rationing fuels or vital products, inability to obtain materials or other causes which are reasonably beyond the control of the defaulting party; provided such failure could not have been prevented by reasonable precautions and could not reasonably be circumvented by the non-performing party through the use of commercially reasonable alternate sources, workaround plans or other means. In such event, the non-performing party will be excused from further performance for as long as such circumstances prevail; provided the non-performing party provides prompt written notice of such circumstances to the other party and such party continues to use commercially reasonable efforts to recommence performance or observance without delay; provided further, however, in the event such force majeure event continues for longer than thirty (30) calendar days, the other party shall be entitled, but not obligated, to terminate the Agreement and/or any outstanding Order Form(s) without penalty or any sort of early termination fees.
                </span>
            },{
                title: 'Communications',
                desc: <span>
                    Except as otherwise set forth herein, all notices under the Agreement will be by email or SMS text message, although we may instead choose to provide notice to
                    Customer through the Services. Notices to us must be sent to <a href={`mailto:${EMAIL_FREIGHTDOK_HELP}`}>help@freightdok.io</a>. Notices will be deemed to have been duly given (a) the business day after
                    they are sent, in the case of notices through text and email; and (b) the same day they are sent, in the case of notices through the Services.
                </span>
            },{
                title: 'Modifications',
                desc: <span>
                    We may change these Customer Terms and the other components of the Agreement (except any Order Forms) in accordance with this Section. If we make a material change to the Agreement, we will provide Customer with reasonable notice prior to the change taking effect, either by emailing the email address associated with Customer’s Account or by messaging Customer through the Services. Customer can review the most current version of the Customer Terms at any time by visiting this page and by visiting the most current versions of the other pages that are referenced in the Agreement. The materially revised Agreement will become effective on the date set forth in our notice, and all other changes will become effective upon posting of the change. If Customer (or any Authorized User) accesses or uses the Services after the effective date, that use will constitute Customer’s acceptance of any revised terms and conditions.
                </span>
            },{
                title: 'Waivers',
                desc: <span>
                    No failure or delay by either party in exercising any right under the Agreement will constitute a waiver of that right. No waiver under the Agreement will be effective unless made in writing and signed by an authorized representative of the party being deemed to have granted the waiver.
                </span>
            },{
                title: 'Severability',
                desc: <span>
                    The Agreement will be enforced to the fullest extent permitted under applicable law. If any provision of the Agreement is held by a court of competent jurisdiction to be contrary to law, the provision will be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of the Agreement will remain in effect.
                </span>
            },{
                title: 'Assignment',
                desc: <span>
                    Neither party may assign or delegate any of its rights or obligations hereunder, whether by operation of law or otherwise, without the prior written consent of the other party (not to be unreasonably withheld). Notwithstanding the foregoing, we may assign the Agreement in its entirety (including all Order Forms), without consent of Customer, to a corporate affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of our assets. Any purported assignment in violation of this section is void. Subject to the foregoing, the Agreement will bind and inure to the benefit of the parties, their respective successors and permitted assigns. provisions of the Agreement will remain in effect.Neither party may assign or delegate any of its rights or obligations hereunder, whether by operation of law or otherwise, without the prior written consent of the other party (not to be unreasonably withheld). Notwithstanding the foregoing, we may assign the Agreement in its entirety (including all Order Forms), without consent of Customer, to a corporate affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of our assets. Any purported assignment in violation of this section is void. Subject to the foregoing, the Agreement will bind and inure to the benefit of the parties, their respective successors and permitted assigns. provisions of the Agreement will remain in effect.
                </span>
            },{
                title: 'Governing Law',
                desc: <span>
                    The Agreement, and any disputes arising out of or related hereto, will be governed exclusively by the internal laws of the State of Indiana, without regard to its conflicts of laws rules or the United Nations Convention on the International Sale of Goods. The parties acknowledge that the Agreement evidences a transaction involving interstate commerce. Notwithstanding the preceding sentences with respect to the substantive law of the Agreement, any arbitration conducted hereunder shall be governed by the Federal Arbitration Act (9 U.S.C. §§ 1-16).
                </span>
            },{
                title: 'Venue; Waiver of Jury Trial; Fees',
                desc: <span>
                    The state and federal courts located in Indianapolis, Indiana will have exclusive jurisdiction to adjudicate any dispute arising out of or relating to the Agreement or its formation, interpretation or enforcement, including any appeal of an arbitration award or for trial court proceedings if the arbitration provision below is found to be unenforceable. <span className='highlight'>Each party hereby consents and submits to the exclusive jurisdiction of such courts. Each party also hereby waives any right to jury trial in connection with any action or litigation in any way arising out of or related to the Agreement.</span> In any action or proceeding to enforce rights under the Agreement, the prevailing party will be entitled to recover its reasonable costs and attorneys’ fees.
                </span>
            },{
                title: 'Arbitration',
                desc: <span>
                    <span className={'highlight'}>Read this section carefully because it requires the parties to arbitrate their disputes and limits the manner in which you may seek relief from us.</span> For any dispute with us specific to the Services, you agree to first contact us at
                    <a href={`mailto:${EMAIL_FREIGHTDOK_HELP}`}>help@freightdok.io</a> and attempt to resolve the dispute informally. If we have not been able to resolve a dispute within sixty (60) days of your first contact, we each agree to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief as provided below) arising out of or in connection with or relating to the Agreement, or the breach or alleged breach thereof by binding arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for JAMS, except as provided herein. The arbitration will be conducted in Indianapolis, Indiana, unless we agree otherwise. If you are using the Services for commercial purposes, each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys’ fees and reasonable costs for expert and other witnesses. If you are an individual using the Services for non-commercial purposes: (a) JAMS may require you to pay a fee for the initiation of your case, unless you apply for and successfully obtain a fee waiver from JAMS; (b) the award rendered by the arbitrator may include your costs of arbitration, your reasonable attorney’s fees, and your reasonable costs for expert and other witnesses; and (c) you may sue in a small claims court of competent jurisdiction without first engaging in arbitration, but this does not absolve you of your commitment to engage in the informal dispute resolution process. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing us from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, intellectual property rights or other proprietary rights.
                </span>
            },{
                title: 'Entire Agreement',
                desc: <span>
                    <span className={'highlight'}>Read this section carefully because it requires the parties to arbitrate their disputes and limits the manner in which you may seek relief from us.</span> For any dispute with us specific to the Services, you agree to first contact us at
                    <a href={`mailto:${EMAIL_FREIGHTDOK_HELP}`}>help@freightdok.io</a> and attempt to resolve the dispute informally. If we have not been able to resolve a dispute within sixty (60) days of your first contact, we each agree to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief as provided below) arising out of or in connection with or relating to the Agreement, or the breach or alleged breach thereof by binding arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for JAMS, except as provided herein. The arbitration will be conducted in Indianapolis, Indiana, unless we agree otherwise. If you are using the Services for commercial purposes, each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys’ fees and reasonable costs for expert and other witnesses. If you are an individual using the Services for non-commercial purposes: (a) JAMS may require you to pay a fee for the initiation of your case, unless you apply for and successfully obtain a fee waiver from JAMS; (b) the award rendered by the arbitrator may include your costs of arbitration, your reasonable attorney’s fees, and your reasonable costs for expert and other witnesses; and (c) you may sue in a small claims court of competent jurisdiction without first engaging in arbitration, but this does not absolve you of your commitment to engage in the informal dispute resolution process. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing us from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, intellectual property rights or other proprietary rights.
                </span>
            },{
                title: 'Additional Terms for Mobile Applications',
                desc: <span>
                    The following applies to any Services acquired from the Apple App Store <span className='highlight'>Apple-Sourced Software</span> : Customer acknowledges and agrees that the Agreement is solely between Customer and us, not Apple, Inc. <span className='highlight'>Apple</span> and that Apple has no responsibility for the Apple-Sourced Software or content thereof. Customer’s use of the Apple-Sourced Software must comply with the App Store Terms of Service. Customer acknowledges that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Apple-Sourced Software. In the event of any failure of the Apple-Sourced Software to conform to any applicable warranty, Customer may notify Apple, and Apple will refund the purchase price for the Apple-Sourced Software (if any); to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Apple-Sourced Software, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be solely governed by the Agreement and any law applicable to us as provider of the software. Customer acknowledges that Apple is not responsible for addressing any claims by Customer or any third party relating to the Apple-Sourced Software or Customer’s possession and/or use of the Apple-Sourced Software, including, but not limited to: (a) product liability claims; (b) any claim that the Apple-Sourced Software fails to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer protection or similar legislation; and all such claims are governed solely by the Agreement and any law applicable to us as provider of the software. Customer acknowledges that, in the event of any third-party claim that the Apple-Sourced Software or your possession and use of that Apple-Sourced Software infringes that third party’s intellectual property rights, we, and not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by the Agreement. Customer and we acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of the Agreement as relates to your license of the Apple-Sourced Software, and that, upon your acceptance of the terms and conditions of the Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce the Agreement as relates to Customer’s license of the Apple-Sourced Software against Customer as a third-party beneficiary thereof.
                    <br/>
                    <br/>
                    The following applies to any Services acquired from the Google Play Store <span className='highlight'>Google-Sourced Software</span> : (i) Customer acknowledges that the Agreement is between Customer and us only, and not with Google, Inc. <span className='highlight'>Google</span> ; (ii) Customer’s use of Google-Sourced Software must comply with Google’s then-current Google Play Store Terms of Service; (iii) Google is only a provider of the Google Play Store where Customer obtained the Google-Sourced Software; (iv) we, and not Google, are solely responsible for our Google-Sourced Software; (v) Google has no obligation or liability to Customer with respect to Google-Sourced Software or the Agreement; and (vi) Customer acknowledges and agrees that Google is a third-party beneficiary to the Agreement as it relates to our Google-Sourced Software.
                </span>
            },{
                title: 'Survival',
                desc: <span>
                    Any section of the Agreement that, by its terms or its nature, should survive the termination or expiration of the Agreement shall so survive, including but not limited to Sections 2.4, 2.5, 3.2, 3.3, 4, 5.5, and 6 through 10.
                </span>
            },{
                title: 'Contacting Us',
                desc: <span>
                    Please also feel free to contact us if you have any questions about the Customer Terms or any other part of the Agreement. You may contact us at <a href={`mailto:${EMAIL_FREIGHTDOK_HELP}`}>help@freightdok.io</a>.
                    <br/>
                    <br/>
                    If you are a California resident, in accordance with Cal. Civ. Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254.

                </span>
            },
        ]
    }
]

export {
    Para,
    List,
    termsUseTexts
}