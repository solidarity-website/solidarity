import InnerPageLayout from '../components/InnerPageLayout'
import './QuarterlyLettersPage.css'

export default function QuarterlyLettersPage() {
  return (
    <InnerPageLayout title="Quarterly Letters" bannerBg="/assets/perspectives-banner.jpg">
      <div className="ql-iframe-wrap">
        <iframe
          src="https://login.solidarity.in/quarterly/report"
          width="100%"
          height="1050"
          scrolling="yes"
          className="ql-iframe"
          title="Quarterly Letters"
        />
      </div>
    </InnerPageLayout>
  )
}
