import InnerPageLayout from '../components/InnerPageLayout'
import PerspectivesSidebar from '../components/PerspectivesSidebar'
import './PerspectivesListingPage.css' // Reuse the flexbox layout styles
import './LegalPage.css' // Import for upi-content styling consistency if needed

export default function UPIPaymentDetailsPage() {
  return (
    <InnerPageLayout title="UPI PAYMENT DETAILS">
      <div className="perspectives-container">
        <div className="posts-column upi-content">
          <p>
            Based on the circular issued by the Securities & Exchange Board of India (SEBI) dated 11 Jun 2025 - 
            Adoption of Standardised, Validated and Exclusive UPI IDs for Payment Collection by SEBI Registered 
            Intermediaries from Investors,{' '}
            <strong>
              <a 
                href="/assets/UPI-details.pdf" 
                target="_blank" 
                rel="noreferrer noopener"
                style={{ textDecoration: 'underline' }}
              >
                enclosed
              </a>
            </strong>{' '}
            are the valid UPI ID’s for Solidarity Advisors Private Limited.
          </p>
        </div>
        
        <PerspectivesSidebar />
      </div>
    </InnerPageLayout>
  )
}
