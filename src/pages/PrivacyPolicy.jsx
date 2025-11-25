const PrivacyPolicy = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
                <p style={{ marginBottom: '2rem', color: '#888', fontSize: '0.9rem' }}>Last updated: November 24, 2025</p>

                <div style={{ color: '#d1d5db' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>

                    <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Interpretation and Definitions</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        For the purposes of this Privacy Policy:
                    </p>
                    <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem', spaceY: '0.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Point Two Studios.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Service</strong> refers to the Application, specifically "Motivational Quotes - Novus".</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>You</strong> means the individual accessing or using the Service.</li>
                    </ul>

                    <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Collecting and Using Your Personal Data</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Types of Data Collected</strong>
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We do not collect any personally identifiable information (PII) while you use our applications. The Application does not require you to create an account, and we do not track your location or usage data in a way that is linked to your identity.
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
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
