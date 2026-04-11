import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

interface DropdownItem {
  label: string
  href: string
  external?: boolean
}

interface NavItem {
  label: string
  href?: string
  external?: boolean
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: 'About Us',
    href: '/about-us',
    dropdown: [
      { label: 'Guiding Principles', href: '/about-us#guide' },
      { label: 'Team', href: '/team' },
    ],
  },
  {
    label: 'Product',
    dropdown: [
      { label: 'Product Offering', href: '/product-offering' },
      { label: 'Portfolio Performance', href: '/portfolio-performance' },
      { label: 'Fee Structure', href: '/fee-structure' },
      { label: 'Direct Onboarding', href: '/direct-onboarding' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    label: 'Perspectives',
    dropdown: [
      { label: 'Blogs', href: '/perspectives/blogs' },
      { label: 'Select Company Perspectives', href: '/perspectives/company-perspective' },
      { label: 'Perspectives on Questions from Client Partners', href: '/perspectives/client-questions' },
      { label: 'Quarterly Letters', href: '/perspectives/quarterly-letters' },
    ],
  },
  {
    label: 'Client Login',
    href: 'https://app.solidarity.in/wealthspectrum/app/login',
    external: true,
  },
  {
    label: 'Disclosures',
    dropdown: [
      { label: 'Investor Charter', href: '/wp-content/uploads/2022/01/Annexure-A-Dec-21.pdf', external: true },
      { label: 'Disclosure Document', href: '/wp-content/uploads/2026/01/Disclosure_document_SAPL_22_Jan_2026.pdf', external: true },
      { label: 'Fee Calculation Tool', href: '/fee-calculation-tool' },
      { label: 'Investor Complaints', href: '/wp-content/uploads/2026/03/Annexure-B-FEB-26-NEW-FORMAT.pdf', external: true },
      { label: 'Regulatory Details', href: '/about-us/regulatory-details' },
      { label: 'UPI Payment Details', href: '/upi-payment-details' },
      { label: 'Stewardship Code', href: '/wp-content/uploads/2026/01/Stewarship-Code_NP-7Jan26.pdf', external: true },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (item: NavItem) => {
    if (item.dropdown) {
      // Check dropdown children first, plus the item's own href
      const childMatch = item.dropdown.some(sub => !sub.external && (pathname === sub.href || pathname.startsWith(sub.href.split('#')[0] + '/')))
      const selfMatch = item.href && !item.external && (pathname === item.href || pathname.startsWith(item.href + '/'))
      return !!(childMatch || selfMatch)
    }
    if (item.href && !item.external) return pathname === item.href || pathname.startsWith(item.href + '/')
    return false
  }

  const renderLink = (item: Pick<DropdownItem, 'href' | 'external' | 'label'>, className?: string) => {
    if (item.external) {
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
          <span className="navbar__label">{item.label}</span>
        </a>
      )
    }
    return (
      <Link to={item.href!} className={className} onClick={() => setMobileOpen(false)}>
        <span className="navbar__label">{item.label}</span>
      </Link>
    )
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          {/* Logo */}
          <div className="navbar__logo">
            <Link to="/">
              <img src="/assets/Logo.png" alt="Solidarity Investment Managers Logo" height={30} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="navbar__menu">
            {navItems.map((item, i) => (
              <li
                key={i}
                className={`navbar__item${item.dropdown ? ' navbar__item--has-dropdown' : ''}`}
                onMouseEnter={() => item.dropdown && setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href && !item.dropdown ? (
                  renderLink({ href: item.href, label: item.label, external: item.external }, `navbar__link${isActive(item) ? ' navbar__link--active' : ''}`)
                ) : (
                  <button
                    className={`navbar__link navbar__link--btn${isActive(item) ? ' navbar__link--active' : ''}`}
                    onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                  >
                    <span className="navbar__label">{item.label}</span>
                    {item.dropdown && <span className="navbar__chevron">▾</span>}
                  </button>
                )}

                {item.dropdown && (
                  <ul
                    className={`navbar__dropdown${openDropdown === i ? ' navbar__dropdown--open' : ''}`}
                  >
                    {item.dropdown.map((sub, j) => (
                      <li key={j} className="navbar__dropdown-item">
                        {sub.external ? (
                          <a href={sub.href} target="_blank" rel="noopener noreferrer" className="navbar__dropdown-link">
                            {sub.label}
                          </a>
                        ) : (
                          <Link to={sub.href} className="navbar__dropdown-link" onClick={() => setOpenDropdown(null)}>
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`}
      >
        <div className="mobile-menu__header container">
          <div className="navbar__logo">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src="/assets/Logo.png" alt="Solidarity" height={30} />
            </Link>
          </div>
        </div>
        <div className="mobile-menu__inner">
          <ul className="mobile-menu__list">
            {navItems.map((item, i) => (
              <li key={i} className="mobile-menu__item">
                {item.dropdown ? (
                  <>
                    <button
                      className={`mobile-menu__link mobile-menu__link--parent${openMobileDropdown === i ? ' mobile-menu__link--open' : ''}`}
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === i ? null : i)}
                      aria-expanded={openMobileDropdown === i}
                    >
                      {item.label}
                      <span className="mobile-menu__chevron" aria-hidden="true">▾</span>
                    </button>
                    <ul className={`mobile-menu__sub${openMobileDropdown === i ? ' mobile-menu__sub--open' : ''}`}>
                      {item.dropdown.map((sub, j) => (
                        <li key={j} className="mobile-menu__sub-item">
                          {sub.external ? (
                            <a href={sub.href} target="_blank" rel="noopener noreferrer" className="mobile-menu__sub-link" onClick={() => setMobileOpen(false)}>
                              {sub.label}
                            </a>
                          ) : (
                            <Link to={sub.href} className="mobile-menu__sub-link" onClick={() => setMobileOpen(false)}>
                              {sub.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href!} className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay backdrop */}
      {mobileOpen && (
        <div className="mobile-menu__backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}
