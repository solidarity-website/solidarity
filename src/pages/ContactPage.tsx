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
      <div className="contact-wrapper">

        {/* ── Left column ── */}
        <div className="contact-left">
          <h2 className="contact-heading">REACH OUT TO US!</h2>

          <ul className="contact-list">
            {contacts.map(({ name, role, email }) => (
              <li key={email} className="contact-list__item">
                <div className="contact-list__person">
                  <span className="contact-list__name">{name}</span>
                  <span className="contact-list__role">{role}</span>
                </div>
                <div className="contact-list__email">
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </li>
            ))}
          </ul>

          <address className="contact-address">
            <strong>Solidarity Advisors Pvt Ltd,</strong><br />
            704 &amp; 705, Balarama,<br />
            E-Block, Bandra Kurla Complex,<br />
            Bandra East, Mumbai 400 051
          </address>
        </div>

        {/* ── Map ── */}
        <div className="contact-map">
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
