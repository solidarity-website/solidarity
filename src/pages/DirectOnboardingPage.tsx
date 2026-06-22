import InnerPageLayout from '../components/InnerPageLayout'
import './DirectOnboardingPage.css'

export default function DirectOnboardingPage() {
  return (
    <InnerPageLayout title="Direct Onboarding">
      <div className="onboard-content">
        <p>
          For investing directly with us, please write to{' '}
          <a
            href="mailto:saplops@solidarity.in"
            style={{ textDecoration: 'underline' }}
          >
            saplops@solidarity.in
          </a>
        </p>
      </div>
    </InnerPageLayout>
  )
}
