import { useParams, Link, Navigate } from 'react-router-dom'
import InnerPageLayout from '../components/InnerPageLayout'
import { teamMembers } from '../data/teamData'
import './TeamMemberDetailPage.css'

export default function TeamMemberDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const idx = teamMembers.findIndex((m) => m.slug === slug)
  if (idx === -1) {
    // If not found, redirect to the team listing page
    return <Navigate to="/team" replace />
  }

  const member = teamMembers[idx]
  const prevMember = idx > 0 ? teamMembers[idx - 1] : null
  const nextMember = idx < teamMembers.length - 1 ? teamMembers[idx + 1] : null

  return (
    <InnerPageLayout title={member.name} bannerBg={member.photo}>
      <div className="member-detail-container">
        <div className="member-detail-row">
          <div className="member-detail-content">
            {/* Team Member Photo aligned to the right (wraps elegantly in desktop, blocks in mobile) */}
            <div className="member-photo-wrapper">
              <img
                src={member.photo}
                alt=""
                className="member-detail-photo"
              />
            </div>

            <h2 className="member-detail-name">{member.name}</h2>
            
            <p className="member-detail-role-wrap">
              <b className="member-detail-role">{member.role}</b>
            </p>

            <p className="member-detail-bio">
              {member.bio}
            </p>

            {member.linkedin && (
              <div className="member-linkedin-container">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="member-linkedin-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="linkedin-icon"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z" />
                    <path
                      fill="#fff"
                      d="M8.746 10.5h-2.746v8h2.746v-8zm-1.373-1.25c.879 0 1.427-.583 1.427-1.313-.016-.744-.548-1.312-1.41-1.312s-1.427.568-1.427 1.312c0 .73.548 1.313 1.394 1.313h.016zm5.627 9.25h-2.747v-4.336c0-1.101-.394-1.852-1.38-1.852-.753 0-1.202.507-1.399 1-.072.175-.09.419-.09.664v4.524h-2.748s.036-7.339 0-8h2.748v1.133c.365-.563.921-1.366 2.242-1.366 1.636 0 2.862 1.069 2.862 3.367l.012 4.866z"
                    />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Elegant Custom Pagination */}
      <div className="custom-pagination-line">
        <div className="custom-pager">
          <div className="pager-item previous">
            {prevMember ? (
              <Link to={`/team/${prevMember.slug}`} title={prevMember.name}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="chevron-svg"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Previous
              </Link>
            ) : (
              <span className="pager-disabled" />
            )}
          </div>

          <div className="pager-item center">
            <Link to="/team" title="All Team Members" aria-label="All Team Members">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="grid-svg"
              >
                <circle cx="5" cy="5" r="1.5" />
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="19" cy="5" r="1.5" />
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
                <circle cx="5" cy="19" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
                <circle cx="19" cy="19" r="1.5" />
              </svg>
              <span className="sr-only">All Team Members</span>
            </Link>
          </div>

          <div className="pager-item next">
            {nextMember ? (
              <Link to={`/team/${nextMember.slug}`} title={nextMember.name}>
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="chevron-svg"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ) : (
              <span className="pager-disabled" />
            )}
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
