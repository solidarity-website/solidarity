import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
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
      { label: 'Investor Charter', href: '/ref/wp-content/uploads/2022/01/Annexure-A-Dec-21.pdf', external: true },
      { label: 'Disclosure Document', href: '/ref/wp-content/uploads/2026/01/Disclosure_document_SAPL_22_Jan_2026.pdf', external: true },
      { label: 'Fee Calculation Tool', href: '/fee-calculation-tool' },
      { label: 'Investor Complaints', href: '/ref/wp-content/uploads/2026/03/Annexure-B-FEB-26-NEW-FORMAT.pdf', external: true },
      { label: 'Regulatory Details', href: '/about-us/regulatory-details' },
      { label: 'UPI Payment Details', href: '/upi-payment-details' },
      { label: 'Stewardship Code', href: '/ref/wp-content/uploads/2026/01/Stewarship-Code_NP-7Jan26.pdf', external: true },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
]

export default function Navbar() {
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

  const renderLink = (item: Pick<DropdownItem, 'href' | 'external' | 'label'>, className?: string) => {
    if (item.external) {
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
          {item.label}
        </a>
      )
    }
    return (
      <Link to={item.href!} className={className} onClick={() => setMobileOpen(false)}>
        {item.label}
      </Link>
    )
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner container">
          {/* Logo */}
          <div className="navbar__logo">
            <Link to="/" aria-label="Solidarity – Home">
              <img src="/assets/Logo.png" alt="Solidarity Investment Managers" height={30} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="navbar__menu" role="menubar">
            {navItems.map((item, i) => (
              <li
                key={i}
                className={`navbar__item${item.dropdown ? ' navbar__item--has-dropdown' : ''}`}
                role="none"
                onMouseEnter={() => item.dropdown && setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href && !item.dropdown ? (
                  renderLink({ href: item.href, label: item.label, external: item.external }, 'navbar__link')
                ) : (
                  <button
                    className="navbar__link navbar__link--btn"
                    aria-haspopup={item.dropdown ? 'true' : undefined}
                    aria-expanded={openDropdown === i ? 'true' : 'false'}
                    onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                  >
                    {item.label}
                    {item.dropdown && <span className="navbar__chevron" aria-hidden="true">▾</span>}
                  </button>
                )}

                {item.dropdown && (
                  <ul
                    className={`navbar__dropdown${openDropdown === i ? ' navbar__dropdown--open' : ''}`}
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.dropdown.map((sub, j) => (
                      <li key={j} role="none" className="navbar__dropdown-item">
                        {sub.external ? (
                          <a href={sub.href} target="_blank" rel="noopener noreferrer" role="menuitem" className="navbar__dropdown-link">
                            {sub.label}
                          </a>
                        ) : (
                          <Link to={sub.href} role="menuitem" className="navbar__dropdown-link" onClick={() => setOpenDropdown(null)}>
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
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
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
        aria-hidden={!mobileOpen}
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
