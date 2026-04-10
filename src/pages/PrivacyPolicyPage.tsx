import InnerPageLayout from '../components/InnerPageLayout'
import './LegalPage.css'

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout title="Privacy Policy">
      <div className="legal-body">
        <h2>Privacy Policy</h2>
        <p>
          This privacy policy has been compiled to better serve those who are concerned with how
          their "Personally Identifiable Information" (PII) is being used online. PII is information
          that can be used on its own or with other information to identify, contact, or locate a
          single person, or to identify an individual in context. Please read our privacy policy
          carefully to get a clear understanding of how we collect, use, protect and handle your
          Personally Identifiable Information in accordance with our website.
        </p>

        <h2>Personal Information We Collect</h2>
        <p>
          When you enquire or register on our site, as appropriate, you may be asked to enter your
          name, email address, phone number or other details to help us with your query.
        </p>

        <h2>When We Collect Information</h2>
        <p>
          We collect information from you when you fill out a form or enter information on our site.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect from you in the following ways:</p>
        <ul>
          <li>To personalize your experience and to allow us to deliver the type of content in which you are most interested</li>
          <li>To improve our website in order to better serve you</li>
          <li>To allow us to better service you in responding to your customer service requests</li>
          <li>To administer a contest, promotion, survey or other site feature</li>
          <li>To send periodic emails regarding your enquiry or other products and services</li>
        </ul>

        <h2>How We Protect Your Information</h2>
        <p>
          We implement a variety of security measures when a user enters, submits, or accesses their
          information to maintain the safety of your personal information. We do not use vulnerability
          scanning and/or scanning to PCI standards. We use regular Malware Scanning.
        </p>
        <p>
          Your personal information is contained behind secured networks and is only accessible by a
          limited number of persons who have special access rights to such systems, and are required
          to keep the information confidential.
        </p>

        <h2>Do We Use Cookies?</h2>
        <p>
          We may use cookies to help us remember and process the items in your user session and
          understand and save your preferences for future visits and compile aggregate data about
          site traffic and site interaction so that we can offer better site experiences and tools
          in the future.
        </p>

        <h2>Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable
          Information unless we provide users with advance notice. This does not include website
          hosting partners and other parties who assist us in operating our website, conducting our
          business, or serving our users, so long as those parties agree to keep this information
          confidential.
        </p>

        <h2>Contacting Us</h2>
        <p>
          If there are any questions regarding this privacy policy, you may contact us at{' '}
          <a href="mailto:info@solidarity.in">info@solidarity.in</a>.
        </p>
      </div>
    </InnerPageLayout>
  )
}
