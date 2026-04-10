interface TeamMember {
  name: string
  role: string
  photo: string
  bio: string
  linkedin?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Manish Gupta',
    role: 'Founder & Chief Investment Officer',
    photo: '/assets/team/Don_Thadeuse.jpg', // placeholder until Manish photo available
    bio: 'Manish is the founder of Solidarity Advisors. He has over two decades of experience in equity research and portfolio management. He worked closely with Rakesh Jhunjhunwala for many years, developing deep expertise in identifying quality businesses at reasonable valuations.',
    linkedin: 'https://www.linkedin.com/in/manish-gupta-solidarity/',
  },
  {
    name: 'Don Thadeuse',
    role: 'Chief Operating Officer',
    photo: '/assets/team/Don_Thadeuse.jpg',
    bio: 'Don oversees operations, client servicing, compliance and technology at Solidarity. He ensures the firm runs smoothly so the investment team can focus entirely on generating superior risk-adjusted returns for our client partners.',
  },
  {
    name: 'Anirudh Shetty',
    role: 'Partner',
    photo: '/assets/team/Anirudh_Shetty.png',
    bio: 'Anirudh is a Partner at Solidarity with extensive experience in equity research and investment management across Indian listed equities.',
  },
  {
    name: 'Naarah Pereira',
    role: 'Partner',
    photo: '/assets/team/Naarah_Pereira.png',
    bio: 'Naarah is a Partner at Solidarity, contributing to portfolio management, client relationships, and research across sectors in Indian equities.',
  },
  {
    name: 'Aman Thadani',
    role: 'Partner',
    photo: '/assets/team/Aman_Thadani.png',
    bio: 'Aman is a Partner at Solidarity, focused on equity research and investment analysis with a long-term perspective.',
  },
]

export { teamMembers }
export type { TeamMember }
