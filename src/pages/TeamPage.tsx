import { Link } from 'react-router-dom'
import InnerPageLayout from '../components/InnerPageLayout'
import { teamMembers } from '../data/teamData'
import './TeamPage.css'

export default function TeamPage() {
  return (
    <InnerPageLayout title="Team">
      <ul className="team-grid">
        {teamMembers.map((member) => (
          <li key={member.slug} className="team-card">
            <Link
              to={`/team/${member.slug}`}
              className="team-card__link"
              aria-label={`View profile of ${member.name}`}
            >
              <div className="team-card__photo-wrap">
                <img src={member.photo} alt={member.name} className="team-card__photo" />
                <div className="team-card__overlay" aria-hidden="true">
                  <p className="team-card__name">{member.name}</p>
                  <div className="team-card__sep" aria-hidden="true" />
                  <p className="team-card__role">{member.role}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </InnerPageLayout>
  )
}
