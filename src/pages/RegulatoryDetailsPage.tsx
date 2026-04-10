import InnerPageLayout from '../components/InnerPageLayout'

export default function RegulatoryDetailsPage() {
  return (
    <InnerPageLayout title="REGULATORY DETAILS">
      <div className="regulatory-content">
        <p><strong>SOLIDARITY ADVISORS PRIVATE LIMITED</strong></p>
        <p>SEBI Registration Number: INP000004961</p>
        
        <div style={{ marginTop: '2.5rem' }}>
          <p><strong>FOR INVESTOR GRIEVANCES</strong></p>
          <p>Please reach out to:</p>
          <p><strong>COMPLIANCE OFFICER</strong></p>
          <p>Ms Naarah Pereira</p>
          <p><a href="mailto:np@solidarity.in">np@solidarity.in</a></p>
        </div>

        <p style={{ marginTop: '2rem' }}>
          In case you are not satisfied with the redressal, you can lodge a complaint at{' '}
          <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000ff' }}>
            SEBI SCORES
          </a>{' '}
          or{' '}
          <a href="https://smartodr.in/register" target="_blank" rel="noopener noreferrer" style={{ color: '#0000ff' }}>
            SMART ODR
          </a>
        </p>
      </div>
    </InnerPageLayout>
  )
}
