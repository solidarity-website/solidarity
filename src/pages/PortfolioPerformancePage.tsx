import InnerPageLayout from '../components/InnerPageLayout'
import './PortfolioPerformancePage.css'

export default function PortfolioPerformancePage() {
  return (
    <InnerPageLayout title="Portfolio Performance">
      <div className="perf-content">
        <figure className="perf-figure">
          <img
            src="https://www.solidarity.in/wp-content/uploads/2026/03/Solidarity-performance-Feb-26.png"
            alt="Solidarity Portfolio Performance"
            className="perf-img"
          />
        </figure>
        <p>
          Please click on this{' '}
          <a
            href="https://www.apmiindia.org/apmi/welcomeiaperformance.htm?action=PMSmenu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>link</strong>
          </a>{' '}
          for viewing our performance relative to other portfolio managers
        </p>
      </div>
    </InnerPageLayout>
  )
}
