import InnerPageLayout from '../components/InnerPageLayout'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <InnerPageLayout title="About Us">
      <div id="guide" className="about-guide">
        <h3 className="about-guide__heading">Guiding Principles</h3>
        <ul className="about-guide__list">
          <li>Disciplined investment approach with emphasis on risk management</li>
          <li>Relationship – rather than transactional – approach. We will treat clients as partners backed by complete alignment of interests</li>
          <li>Pursuit of disciplined growth in building our franchise</li>
          <li>Be a learning organization that gets better every day in whatever we do</li>
          <li>Profits with purpose</li>
        </ul>
      </div>
    </InnerPageLayout>
  )
}
