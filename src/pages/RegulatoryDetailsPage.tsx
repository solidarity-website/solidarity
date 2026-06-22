import InnerPageLayout from '../components/InnerPageLayout'
import PerspectivesSidebar from '../components/PerspectivesSidebar'
import './RegulatoryDetailsPage.css'

export default function RegulatoryDetailsPage() {
  return (
    <InnerPageLayout title="REGULATORY INFORMATION">
      <div className="regulatory-container">
        <div className="regulatory-main">
          <p className="regulatory-intro">Registrations held by Solidarity Advisors Private Limited</p>
          
          <table className="regulatory-table">
            <tbody>
              <tr>
                <td className="label-col">CIN</td>
                <td className="value-col">U67190MH2011PTC224651</td>
              </tr>
              <tr>
                <td className="label-col">SEBI PMS Registration No</td>
                <td className="value-col">INP000004961</td>
              </tr>
              <tr>
                <td className="label-col">SEBI AIF Registration No</td>
                <td className="value-col">IN/AIF3/25-26/1894</td>
              </tr>
            </tbody>
          </table>

          <h2 className="grievance-title">FOR INVESTOR GRIEVANCES</h2>

          <div className="grievance-box">
            <div className="grievance-box__col">
              <p>Please reach out to:</p>
            </div>
            <div className="grievance-box__col">
              <div className="compliance-title">COMPLIANCE OFFICER</div>
              <div className="compliance-name">Ms Naarah Pereira</div>
            </div>
            <div className="grievance-box__col">
              <div>
                Email: <a href="mailto:np@solidarity.in" className="grievance-email-link">np@solidarity.in</a>
              </div>
              <div className="grievance-address">
                Corporate office: 704 & 705, Balarama, E-Block, Bandra Kurla Complex, Bandra East, Mumbai 400051
              </div>
            </div>
          </div>

          <p className="grievance-footer">
            In case you are not satisfied with the redressal, you can lodge a complaint at{' '}
            <a 
              href="https://scores.sebi.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="grievance-footer-link"
            >
              SEBI SCORES
            </a>{' '}
            or{' '}
            <a 
              href="https://smartodr.in/register" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="grievance-footer-link"
            >
              SMART ODR
            </a>
          </p>
        </div>

        <div className="regulatory-sidebar-wrapper">
          <PerspectivesSidebar />
        </div>
      </div>
    </InnerPageLayout>
  )
}
