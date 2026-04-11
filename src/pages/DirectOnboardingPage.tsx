import InnerPageLayout from '../components/InnerPageLayout'
import './DirectOnboardingPage.css'

export default function DirectOnboardingPage() {
  return (
    <InnerPageLayout title="Direct Onboarding">
      <div className="onboard-content">
        <p>
          For investing directly with us, please{' '}
          <a
            href="https://forms.gle/tLNZUX1rBbf9kDPg6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0000FF', textDecoration: 'underline' }}
          >
            click here
          </a>
        </p>
      </div>
    </InnerPageLayout>
  )
}
