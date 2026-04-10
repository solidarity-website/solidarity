import InnerPageLayout from '../components/InnerPageLayout'
import './InvestmentApproachPage.css'

export default function InvestmentApproachPage() {
  return (
    <InnerPageLayout title="Investment Approach" bannerBg="/assets/page-banner-bg.jpg">
      <div className="ia-wrapper">
        <ul className="ia-list">
          <li>We seek secular compounding at a reasonable price</li>
          <li>
            Strong process orientation that uses frameworks for company evaluation,
            ascertaining fair valuation, portfolio construction and risk management.
          </li>
          <li>
            Please click{' '}
            <a
              href="/ref/wp-content/uploads/2025/07/Introduction-to-Solidarity-8-July-2025-v1-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ia-link"
            >
              <strong>here</strong>
            </a>{' '}
            for a detailed understanding of our approach.
          </li>
        </ul>
      </div>
    </InnerPageLayout>
  )
}
