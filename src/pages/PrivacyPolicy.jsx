import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicy = () => {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Interpretation and Definitions</h2>
            <p style={{ marginBottom: '1rem' }}>
                For the purposes of this Privacy Policy:
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Point Two Studios.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Service</strong> refers to the Application, specifically "Motivational Quotes - Novus", and the Website.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>You</strong> means the individual accessing or using the Service.</li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Collecting and Using Your Personal Data</h2>
            <p style={{ marginBottom: '1rem' }}>
                <strong>Types of Data Collected</strong>
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                We do not collect any personally identifiable information (PII) while you use our applications. The Application does not require you to create an account, and we do not track your location or usage data in a way that is linked to your identity.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>GDPR Data Protection Rights</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>The right to access – You have the right to request copies of your personal data.</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Cookies</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                We use cookies to improve your experience on our website, including understanding how you use our website. You can set your browser not to accept cookies, or use our Cookie Consent banner to manage your preferences.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Children's Privacy</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Changes to this Privacy Policy</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, You can contact us:
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
