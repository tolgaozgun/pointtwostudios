import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Disclaimer = () => {
    return (
        <LegalLayout title="Limitation of Responsibility" lastUpdated="November 25, 2025">
            <p style={{ marginBottom: '1.5rem' }}>
                The information contained on the Service is for general information purposes only.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company assumes no responsibility for errors or omissions in the contents of the Service.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>General Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company does not warrant that the Service is free of viruses or other harmful components.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>External Links Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Errors and Omissions Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Fair Use Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Views Expressed Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>No Responsibility Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>"Use at Your Own Risk" Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
            </p>

            <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
            <p>
                If you have any questions about this Disclaimer, You can contact us:
                <br />
                <a href="mailto:contact@pointtwostudios.com" style={{ color: 'var(--accent-color)' }}>contact@pointtwostudios.com</a>
            </p>
        </LegalLayout>
    );
};

export default Disclaimer;
