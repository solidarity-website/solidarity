import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  'interview-with-mr-anurag-surana-a-domain-expert-on-specialty-chemicals-for-his-decadal-views-on-the-industry',
  'what-explains-our-optimism-when-they-are-lower-roe-vs-consumer-companies-and-hardly-generate-any-free-cash-flow',
  'how-do-we-decide-composition-of-small-mid-and-large-caps-in-the-portfolio',
]

interface Props {
  latestPosts?: PostData[]
  searchQuery?: string
  onSearchChange?: (q: string) => void
}

export default function PerspectivesSidebar({ latestPosts, searchQuery, onSearchChange }: Props) {
  const navigate = useNavigate()
  const [localSearch, setLocalSearch] = useState('')
  
  const posts = latestPosts && latestPosts.length > 0
    ? latestPosts.slice(0, 3)
    : DEFAULT_LATEST_SLUGS
        .map(slug => ALL_POSTS.find(p => p.slug === slug))
        .filter(Boolean) as PostData[]

  const handleSearch = (q: string) => {
    if (onSearchChange) {
      onSearchChange(q)
    } else {
      setLocalSearch(q)
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchQuery ?? localSearch
    if (query.trim()) {
      navigate(`/perspectives/blogs?s=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <aside className="perspectives-sidebar">
      {/* Search Widget - ABOVE CATEGORIES */}
      <section className="sidebar-widget">
        <form onSubmit={handleSearchSubmit} className="sidebar-search-form">
          <input
            type="text"
            className="sidebar-search__input"
            placeholder="Search..."
            value={searchQuery ?? localSearch}
            onChange={e => handleSearch(e.target.value)}
            aria-label="Search posts"
          />
        </form>
      </section>

      {/* Categories Widget */}
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

      {/* Latest Posts Section - BELOW CATEGORIES */}
      <section className="sidebar-widget">
        <h4 className="sidebar-widget__title">Latest Post</h4>
        <ul className="sidebar-latest-list">
          {posts.map(post => (
            <li key={post.id} className="sidebar-latest-item">
              <Link to={`/perspectives/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
