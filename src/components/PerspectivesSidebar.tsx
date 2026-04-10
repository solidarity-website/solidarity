import { Link } from 'react-router-dom'
import { ALL_POSTS, PostData } from '../data/posts'
import './PerspectivesSidebar.css'

const CATEGORIES = [
  { label: 'Asset Allocation',                              path: '/perspectives/asset-allocation' },
  { label: 'Equity',                                        path: '/perspectives/equity' },
  { label: 'Investment Management',                         path: '/perspectives/investment-management' },
  { label: 'Macro Environment',                             path: '/perspectives/macro-environment' },
  { label: 'Perspective On Questions From Client Partners', path: '/perspectives/client-questions' },
  { label: 'Select Company Perspectives',                   path: '/perspectives/company-perspective' },
  { label: 'Venture Capital',                               path: '/perspectives/venture-capital' },
]

const DEFAULT_LATEST_SLUGS = [
  'investment-thesis-on-synergy-green-industries-ltd',
  'investment-thesis-on-yasho-industries-limited',
  'a-perspective-on-poor-sentiment-for-the-qsr-sector-and-why-we-retain-faith-in-rba',
]

interface Props {
  latestPosts?: PostData[]
  searchQuery?: string
  onSearchChange?: (q: string) => void
}

export default function PerspectivesSidebar({ latestPosts, searchQuery = '', onSearchChange }: Props) {
  const posts = latestPosts && latestPosts.length > 0
    ? latestPosts.slice(0, 3)
    : DEFAULT_LATEST_SLUGS
        .map(slug => ALL_POSTS.find(p => p.slug === slug))
        .filter(Boolean) as PostData[]

  return (
    <aside className="perspectives-sidebar">
      {onSearchChange && (
        <section className="sidebar-widget">
          <input
            type="text"
            className="sidebar-search__input"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            aria-label="Search posts"
          />
        </section>
      )}

      <section className="sidebar-widget">
        <h4 className="sidebar-widget__title">Categories</h4>
        <ul>
          {CATEGORIES.map(cat => (
            <li key={cat.label}>
              <Link to={cat.path}>{cat.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar-widget">
        <h4 className="sidebar-widget__title">Latest Post</h4>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/perspectives/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
