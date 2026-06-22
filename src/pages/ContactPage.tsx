import InnerPageLayout from '../components/InnerPageLayout'
import './ContactPage.css'

const contacts = [
  { name: 'Manish Gupta',  role: 'Chief Investment Officer', email: 'mg@solidarity.in' },
  { name: 'Anirudh Shetty', role: 'Partner',                 email: 'as@solidarity.in' },
  { name: 'Don Thadeuse',  role: 'COO',                      email: 'dt@solidarity.in' },
  { name: 'Naarah Pereira', role: 'Partner',                 email: 'np@solidarity.in' },
]

export default function ContactPage() {
  return (
    <InnerPageLayout title="Contact Us" bannerBg="/assets/images/image_edited1.jpg">
      <div className="contact-page-container">
        <h2 className="contact-page-title">REACH OUT TO US!</h2>
        
        <table className="contact-table">
          <tbody>
            {contacts.map(({ name, role, email }) => (
              <tr key={email}>
                <td className="contact-person-cell">
                  <div className="contact-name">{name}</div>
                  <div className="contact-role">{role}</div>
                </td>
                <td className="contact-email-cell">
                  <a href={`mailto:${email}`}>{email}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="contact-address-section">
          <p>Solidarity Advisors Pvt Ltd,</p>
          <p>704 &amp; 705, Balarama,</p>
          <p>E-Block, Bandra Kurla Complex,</p>
          <p>Bandra East, Mumbai 400 051</p>
        </div>

        <div className="contact-map-full">
          <img
            src="/assets/Updated-Map.jpg"
            alt="Solidarity Advisors office location map"
            loading="eager"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = 'none';
            }}
          />
        </div>

      </div>
    </InnerPageLayout>
  )
}
