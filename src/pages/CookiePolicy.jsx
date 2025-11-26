import React from 'react';
import LegalLayout from '../components/LegalLayout';

const CookiePolicy = () => {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                This Cookie Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Interpretation and Definitions</h2>
            <p style={{ marginBottom: '1rem' }}>
                <strong>Interpretation</strong><br />
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <p style={{ marginBottom: '1rem' }}>
                <strong>Definitions</strong><br />
                For the purposes of this Cookie Policy:
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Point Two Studios.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of Your browsing history on that website among its many uses.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Website</strong> refers to Point Two Studios, accessible from <a href="https://pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>pointtwostudios.com</a></li>
                <li style={{ marginBottom: '0.5rem' }}><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>The use of the Cookies</h2>
            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#e5e7eb', fontSize: '1.1rem' }}>Type of Cookies We Use</h3>
            <p style={{ marginBottom: '1.5rem' }}>
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                We use both session and persistent Cookies for the purposes set out below:
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                    <strong>Necessary / Essential Cookies</strong><br />
                    Type: Session Cookies<br />
                    Administered by: Us<br />
                    Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                    <strong>Functionality Cookies</strong><br />
                    Type: Persistent Cookies<br />
                    Administered by: Us<br />
                    Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                    <strong>Tracking and Performance Cookies</strong><br />
                    Type: Persistent Cookies<br />
                    Administered by: Third-Parties (Google Analytics)<br />
                    Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.
                </li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Your Choices Regarding Cookies</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                For more information on how to manage cookies, please check your browser or device's help section.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
            <p>
                If you have any questions about this Cookie Policy, You can contact us:
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default CookiePolicy;
