import InnerPageLayout from '../components/InnerPageLayout'
import './ProductOfferingPage.css'

export default function ProductOfferingPage() {
  return (
    <InnerPageLayout title="Product Offering">
      <div className="product-content">
        <ul className="product-list">
          <li>Multi-cap portfolio construct to balance growth with stability</li>
          <li>Minimum 5 Cr investment corpus per family, to enable us to provide personalized attention</li>
          <li>Customized portfolios rather than model portfolios</li>
          <li>No lock-in.</li>
          <li>No exit loads for the Prudence scheme. Exit loads apply for the Emerging Leaders scheme only if redeemed within 36 months from the date of investments.</li>
          <li>Quarterly letters and calls</li>
          <li>High touch – quarterly 1-1 meetings for accounts over 10 Cr</li>
          <li>Customized fee structures</li>
          <li>
            Please{' '}
            <a
              href="wp-content/uploads/2026/03/Introduction-to-Solidarity-30-Mar-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>click here</strong>
            </a>{' '}
            to read our latest investor presentation
          </li>
        </ul>
      </div>
    </InnerPageLayout>
  )
}
