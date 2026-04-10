import InnerPageLayout from '../components/InnerPageLayout'
import './FeeStructurePage.css'

export default function FeeStructurePage() {
  return (
    <InnerPageLayout title="Fee Structure">
      <div className="fee-images">
        <figure className="fee-figure">
          <img
            src="/assets/Fee-options-Prudence-v1.png"
            alt="Fee options for Prudence scheme"
            className="fee-img"
          />
        </figure>
        <figure className="fee-figure">
          <img
            src="/assets/fee-image-2.png"
            alt="Fee structure details"
            className="fee-img fee-img--sm"
          />
        </figure>
      </div>
    </InnerPageLayout>
  )
}
