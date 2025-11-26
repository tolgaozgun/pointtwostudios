import React from 'react';
import LegalLayout from '../components/LegalLayout';

const TermsOfUse = () => {
    return (
        <LegalLayout title="Terms of Use" lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                Please read these terms and conditions carefully before using Our Service.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Interpretation and Definitions</h2>
            <p style={{ marginBottom: '1rem' }}>
                <strong>Interpretation</strong><br />
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <p style={{ marginBottom: '1rem' }}>
                <strong>Definitions</strong><br />
                For the purposes of these Terms and Conditions:
            </p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named "Motivational Quotes - Novus".</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Point Two Studios.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Service</strong> refers to the Application or the Website.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Acknowledgment</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Intellectual Property</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Links to Other Websites</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Termination</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                Upon termination, Your right to use the Service will cease immediately.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Limitation of Liability</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Governing Law</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Changes to These Terms and Conditions</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
            <p>
                If you have any questions about these Terms and Conditions, You can contact us:
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default TermsOfUse;
