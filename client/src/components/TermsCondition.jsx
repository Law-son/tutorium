import React from "react";
import "./termsconditions.css";

const TermsCondition = () => {
  return (
    <div className="terms-conditions">
      <main>
        <div className="header">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: December 24, 2024</p>
        </div>

        <div className="section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Tutorium ("we," "our," or "us"), a peer-to-peer
            educational marketplace platform designed for university students
            and educators. Our platform enables users to share knowledge, offer
            tutoring services, and exchange educational content. By downloading,
            accessing, or using our educational application (the "App"), you
            agree to be bound by these Terms and Conditions ("Terms"). If you
            disagree with any part of these terms, you may not access or use our
            App.
          </p>
        </div>

        <div className="section">
          <h2>2. Definitions</h2>
          <ul>
            <li>
              "User," "you," or "your" refers to any individual who accesses or
              uses the App
            </li>
            <li>
              "Service Provider" refers to users who offer tutoring services,
              educational content, or expertise through the platform
            </li>
            <li>
              "Student" refers to users who purchase or access services and
              content through the platform
            </li>
            <li>
              "Educator" refers to university lecturers and professors who
              provide educational content
            </li>
            <li>
              "Content" refers to all materials, including but not limited to
              lecture notes, study guides, practice problems, tutorial videos,
              and educational resources
            </li>
            <li>
              "Service" refers to all features, functions, and educational
              services provided through the App, including tutoring sessions and
              educational content access
            </li>
            <li>
              "Session" refers to any tutoring, teaching, or consultation
              interaction between Service Providers and Students
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>3. Account Registration and Security</h2>
          <h3>3.1 Account Creation</h3>
          <ul>
            <li>You must be at least 13 years old to create an account</li>
            <li>
              You must provide accurate, current, and complete information
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials
            </li>
          </ul>

          <h3>3.2 Account Security</h3>
          <ul>
            <li>
              You are solely responsible for all activities under your account
            </li>
            <li>You must immediately notify us of any unauthorized use</li>
            <li>
              We reserve the right to disable any account for security reasons
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>4. User Conduct and Academic Integrity</h2>
          <h3>4.1 Service Provider Responsibilities</h3>
          <ul>
            <li>Accurately represent qualifications and expertise</li>
            <li>Provide services professionally and punctually</li>
            <li>Maintain confidentiality of student information</li>
            <li>Respect intellectual property rights when sharing content</li>
            <li>Adhere to university academic integrity policies</li>
            <li>Clearly state service terms and rates</li>
          </ul>

          <h3>4.2 Student Responsibilities</h3>
          <ul>
            <li>Use tutoring services for learning and understanding</li>
            <li>Complete their own assignments and examinations</li>
            <li>Provide accurate information about their needs</li>
            <li>Respect intellectual property rights</li>
            <li>Pay for services as agreed</li>
          </ul>

          <h3>4.3 Academic Integrity</h3>
          <ul>
            <li>
              Services must not be used for completing assignments or exams on
              behalf of students
            </li>
            <li>Content sharing must comply with university policies</li>
            <li>
              Tutoring should focus on understanding, not solution provision
            </li>
            <li>Users must report academic integrity violations</li>
          </ul>

          <h3>4.4 Prohibited Activities</h3>
          <ul>
            <li>Sharing account credentials</li>
            <li>Uploading malicious content</li>
            <li>Attempting to breach security measures</li>
            <li>Engaging in or promoting academic dishonesty</li>
            <li>Harassing other users</li>
            <li>Violating intellectual property rights</li>
            <li>Providing solutions to active assignments or exam questions</li>
            <li>Misrepresenting qualifications or expertise</li>
            <li>
              Sharing confidential university content without authorization
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>5. Intellectual Property Rights</h2>
          <h3>5.1 Our Rights</h3>
          <ul>
            <li>
              All content, trademarks, and materials in the App are our property
            </li>
            <li>
              The App's design, code, and functionality are protected by
              intellectual property laws
            </li>
          </ul>

          <h3>5.2 User Content</h3>
          <ul>
            <li>You retain rights to content you create</li>
            <li>
              You grant us a license to use, modify, and display your content
            </li>
            <li>
              You warrant that your content doesn't infringe on others' rights
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>6. Privacy and Data Protection</h2>
          <h3>6.1 Data Collection</h3>
          <ul>
            <li>
              We collect and process personal data as described in our Privacy
              Policy
            </li>
            <li>We comply with applicable data protection laws</li>
            <li>We implement reasonable security measures</li>
          </ul>

          <h3>6.2 Data Usage</h3>
          <ul>
            <li>We use data to improve services</li>
            <li>We may share anonymized data for analytics</li>
            <li>We do not sell personal data</li>
          </ul>
        </div>

        <div className="section">
          <h2>7. Payments and Service Fees</h2>
          <h3>7.1 Service Provider Payments</h3>
          <ul>
            <li>
              Service Providers set their own rates within platform guidelines
            </li>
            <li>Platform fees will be deducted from each transaction</li>
            <li>Payments are processed after service completion</li>
            <li>Service Providers must accurately report their earnings</li>
            <li>All fees are in USD unless otherwise stated</li>
          </ul>

          <h3>7.2 Student Payments</h3>
          <ul>
            <li>All fees must be paid through the platform</li>
            <li>Service rates are clearly displayed before booking</li>
            <li>Additional charges must be agreed upon in advance</li>
            <li>Payment is required before service delivery</li>
          </ul>

          <h3>7.3 Cancellations and Refunds</h3>
          <ul>
            <li>
              Cancellation policies must be clearly stated by Service Providers
            </li>
            <li>Refunds for cancelled sessions follow our refund policy</li>
            <li>Disputes will be handled through our resolution process</li>
            <li>No refunds for completed services</li>
            <li>Platform fees are non-refundable</li>
          </ul>

          <h3>7.4 Educational Content Pricing</h3>
          <ul>
            <li>Content creators set their own pricing for materials</li>
            <li>Platform fees apply to content sales</li>
            <li>Bulk pricing and educational discounts may be available</li>
            <li>Content access terms must be clearly stated</li>
          </ul>
        </div>

        <div className="section">
          <h2>8. Content and Educational Materials</h2>
          <h3>8.1 Accuracy</h3>
          <ul>
            <li>
              We strive for accurate content but do not guarantee complete
              accuracy
            </li>
            <li>Educational materials may be updated periodically</li>
            <li>Users should verify critical information independently</li>
          </ul>

          <h3>8.2 Third-Party Content</h3>
          <ul>
            <li>We may include third-party content</li>
            <li>We are not responsible for third-party content accuracy</li>
            <li>External links are provided for convenience only</li>
          </ul>
        </div>

        <div className="section">
          <h2>9. Termination</h2>
          <h3>9.1 Our Rights</h3>
          <p>
            We may terminate or suspend access to our App immediately, without
            prior notice, for:
          </p>
          <ul>
            <li>Violation of Terms</li>
            <li>Illegal activities</li>
            <li>Harmful behavior</li>
            <li>Non-payment</li>
          </ul>

          <h3>9.2 User Rights</h3>
          <ul>
            <li>You may terminate your account at any time</li>
            <li>
              You remain liable for obligations incurred before termination
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>10. Limitation of Liability</h2>
          <h3>10.1 Disclaimer</h3>
          <ul>
            <li>The App is provided "as is" without warranties</li>
            <li>We do not guarantee uninterrupted service</li>
            <li>We are not liable for educational outcomes</li>
          </ul>

          <h3>10.2 Limitation</h3>
          <ul>
            <li>Our liability is limited to the amount paid for service</li>
            <li>We are not liable for indirect damages</li>
            <li>Some jurisdictions may not allow liability limitations</li>
          </ul>
        </div>

        <div className="section">
          <h2>11. Changes to Terms</h2>
          <ul>
            <li>We may modify these Terms at any time</li>
            <li>Changes will be effective upon posting</li>
            <li>Continued use constitutes acceptance of changes</li>
          </ul>
        </div>

        <div className="section">
          <h2>12. Governing Law and Jurisdiction</h2>
          <ul>
            <li>These Terms are governed by [Your Jurisdiction] law</li>
            <li>Disputes will be resolved in [Your Jurisdiction] courts</li>
            <li>You agree to personal jurisdiction in these courts</li>
          </ul>
        </div>

        <div className="section">
          <h2>13. Contact Information</h2>
          <p>For questions about these Terms, contact us at:</p>
          <p className="highlight">
            Email:{" "}
            <a href="mailto:app.tutorium@gmail.com" className="text-black">
              app.tutorium@gmail.com
            </a>
          </p>
        </div>

        <div className="section">
          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions will remain in effect.
          </p>
        </div>

        <div className="section">
          <h2>15. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and Tutorium
            regarding the use of the App.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TermsCondition;
