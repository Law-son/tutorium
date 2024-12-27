import React from "react";
import "./privacypolicy.css";

const PrivacyPolicy = () => {
  return <div className="privacy-policy">
    <main>
      <div className="header">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: December 24, 2024</p>
      </div>

      <div className="section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Tutorium's Privacy Policy. This policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our peer-to-peer educational marketplace platform. We respect your
          privacy and are committed to protecting your personal data.
        </p>
      </div>

      <div className="section">
        <h2>2. Information We Collect</h2>

        <h3>2.1 Personal Information</h3>
        <ul>
          <li>Name and contact information</li>
          <li>University affiliation and student/faculty status</li>
          <li>Academic credentials and qualifications</li>
          <li>Profile information and biography</li>
          <li>Profile picture (optional)</li>
          <li>Payment information</li>
        </ul>

        <h3>2.2 Educational Information</h3>
        <ul>
          <li>Academic subjects and areas of expertise</li>
          <li>Teaching and tutoring experience</li>
          <li>Course materials and educational content</li>
          <li>Student feedback and ratings</li>
        </ul>

        <h3>2.3 Usage Data</h3>
        <ul>
          <li>Session duration and frequency</li>
          <li>Features and services used</li>
          <li>Device information and IP address</li>
          <li>Browser type and settings</li>
        </ul>
      </div>

      <div className="section">
        <h2>3. How We Use Your Information</h2>

        <h3>3.1 Core Platform Services</h3>
        <ul>
          <li>Matching students with tutors and service providers</li>
          <li>Processing payments and transactions</li>
          <li>Facilitating communication between users</li>
          <li>Verifying academic credentials</li>
          <li>Managing user accounts and profiles</li>
        </ul>

        <h3>3.2 Platform Improvement</h3>
        <ul>
          <li>Analyzing usage patterns and trends</li>
          <li>Improving user experience</li>
          <li>Developing new features</li>
          <li>Quality assurance and testing</li>
        </ul>

        <h3>3.3 Communication</h3>
        <ul>
          <li>Service updates and notifications</li>
          <li>Session reminders and confirmations</li>
          <li>Marketing communications (with consent)</li>
          <li>Support and assistance</li>
        </ul>
      </div>

      <div className="section">
        <h2>4. Information Sharing</h2>

        <h3>4.1 Public Profile Information</h3>
        <ul>
          <li>Name and profile picture</li>
          <li>Areas of expertise</li>
          <li>Teaching experience</li>
          <li>Ratings and reviews</li>
          <li>University affiliation</li>
        </ul>

        <h3>4.2 Private Information</h3>
        <ul>
          <li>Contact details (shared only after booking)</li>
          <li>Payment information (never shared with other users)</li>
          <li>Academic records and verification documents</li>
        </ul>

        <h3>4.3 Third-Party Sharing</h3>
        <ul>
          <li>Payment processors for transaction handling</li>
          <li>Cloud service providers for hosting</li>
          <li>Analytics services for platform improvement</li>
          <li>Academic verification services</li>
        </ul>
      </div>

      <div className="section">
        <h2>5. Data Security</h2>
        <ul>
          <li>Encryption of sensitive data</li>
          <li>Regular security audits and updates</li>
          <li>Secure payment processing</li>
          <li>Access controls and authentication</li>
          <li>Data backup and recovery procedures</li>
        </ul>
      </div>

      <div className="section">
        <h2>6. User Rights</h2>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request data deletion</li>
          <li>Export your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Control privacy settings</li>
        </ul>
      </div>

      <div className="section">
        <h2>7. Data Retention</h2>
        <ul>
          <li>Account information retained while active</li>
          <li>Transaction records kept for legal requirements</li>
          <li>Content deletion upon account termination</li>
          <li>Backup retention for security purposes</li>
        </ul>
      </div>

      <div className="section">
        <h2>8. Cookies and Tracking</h2>
        <h3>8.1 Essential Cookies</h3>
        <ul>
          <li>Authentication and security</li>
          <li>Session management</li>
          <li>User preferences</li>
        </ul>

        <h3>8.2 Analytics Cookies</h3>
        <ul>
          <li>Usage patterns and trends</li>
          <li>Performance monitoring</li>
          <li>Feature optimization</li>
        </ul>
      </div>

      <div className="section">
        <h2>9. Children's Privacy</h2>
        <p>
          Our services are intended for university students and educators. We do
          not knowingly collect information from individuals under 18 years of
          age. If we become aware that we have inadvertently collected personal
          information from a child under 18, we will take steps to delete such
          information.
        </p>
      </div>

      <div className="section">
        <h2>10. International Data Transfers</h2>
        <ul>
          <li>Data may be processed in multiple countries</li>
          <li>Appropriate safeguards for international transfers</li>
          <li>Compliance with data protection laws</li>
          <li>User notification of transfer locations</li>
        </ul>
      </div>

      <div className="section">
        <h2>11. Changes to Privacy Policy</h2>
        <ul>
          <li>Regular policy reviews and updates</li>
          <li>Notification of significant changes</li>
          <li>User consent for material changes</li>
          <li>Previous versions available upon request</li>
        </ul>
      </div>

      <div className="section">
        <h2>12. Contact Information</h2>
        <p>
          For questions about this Privacy Policy or our data practices, contact
          us at:
        </p>
        <p className="highlight">
          Email: <a href="mailto:app.tutorium@gmail.com" className="text-black">app.tutorium@gmail.com</a>
        </p>
        {/* <p>Data Protection Officer: [DPO Contact Information]</p> */}
      </div>
    </main>
  </div>;
};

export default PrivacyPolicy;
