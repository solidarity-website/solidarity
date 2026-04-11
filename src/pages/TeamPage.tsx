import InnerPageLayout from '../components/InnerPageLayout'
import './TeamPage.css'

const teamMembers = [
  { name: 'Manish Gupta',        role: 'Founder and Chief Investment Officer', photo: '/assets/team/Manish_Gupta.png' },
  { name: 'Don Thadeuse',        role: 'Chief Operating Officer',               photo: '/assets/team/Don_Thadeuse.jpg' },
  { name: 'Anirudh Shetty',      role: 'Partner',                               photo: '/assets/team/Anirudh_Shetty.png' },
  { name: 'Naarah Pereira',      role: 'Partner',                               photo: '/assets/team/Naarah_Pereira.png' },
  { name: 'Aman Thadani',        role: 'Partner',                               photo: '/assets/team/Aman_Thadani.png' },
  { name: 'Pratik Jain',         role: 'Senior Analyst',                        photo: '/assets/team/Pratik.jpg' },
  { name: 'Dinesh Gianchandani', role: 'Operations Manager',                    photo: '/assets/team/Dinesh.jpg' },
  { name: 'Sanyam Shah',         role: 'Analyst',                               photo: '/assets/team/Sanyam.jpg' },
  { name: 'Zahra Patel',         role: 'Analyst',                               photo: '/assets/team/Zahra.jpg' },
]

export default function TeamPage() {
  return (
    <InnerPageLayout title="Team">
      <ul className="team-grid">
        {teamMembers.map((member) => (
          <li key={member.name} className="team-card">
            <div className="team-card__photo-wrap" tabIndex={0}>
              <img src={member.photo} alt="" className="team-card__photo" />
              <div className="team-card__overlay" aria-hidden="true">
                <p className="team-card__name">{member.name}</p>
                <div className="team-card__sep" aria-hidden="true" />
                <p className="team-card__role">{member.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </InnerPageLayout>
  )
}
