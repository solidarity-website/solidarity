import InnerPageLayout from '../components/InnerPageLayout'
import './LegalPage.css'

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout title="Privacy Policy">
      <div className="legal-body">
        <p>
          This privacy policy has been compiled to better serve those who are concerned with how their “Personally Identifiable Information” (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect & handle your Personally Identifiable Information in accordance with our website.
        </p>

        <h2></h2>
        <h3 style={{ paddingLeft: '40px' }}>What personal information do we collect from the people that visit our blog, website or app?</h3>
        <p style={{ paddingLeft: '40px' }}>
          When registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.
        </p>
        <h3 style={{ paddingLeft: '40px' }}>When do we collect information?</h3>
        <p style={{ paddingLeft: '40px' }}>
          We collect information from you when you subscribe to a newsletter, respond to a survey, fill out a form or enter information on our site.
        </p>
        <h3 style={{ paddingLeft: '40px' }}>How do we use your information?</h3>
        <p style={{ paddingLeft: '40px' }}>
          We may use the information we collect from you when you sign up for our newsletter, respond to a survey or marketing communication in the following ways:
        </p>
        <p style={{ paddingLeft: '40px' }}>
          To send periodic emails regarding your account or other products and services.
        </p>
        <h3 style={{ paddingLeft: '40px' }}>How do we protect your information?</h3>
        <p style={{ paddingLeft: '40px' }}>
          Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.
        </p>
        <p style={{ paddingLeft: '40px' }}>We regularly scan for malware.</p>
        <p style={{ paddingLeft: '40px' }}>
          Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
        </p>
        <p style={{ paddingLeft: '40px' }}>
          We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.
        </p>

        <h2></h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it’s release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property or safety.
        </p>

        <h2></h2>
        <p>We do not include or offer third-party products or services on our website.</p>

        <h2></h2>
        <p>
          Google’s advertising requirements can be summed up by Google’s Advertising Principles. They are put in place to provide a positive experience for users.{' '}
          <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
            https://support.google.com/adwordspolicy/answer/1316548?hl=en
          </a>
          . We have not enabled Google AdSense on our website.
        </p>
      </div>
    </InnerPageLayout>
  )
}
