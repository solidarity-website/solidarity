import './PageBanner.css'

interface PageBannerProps {
  title: string
  bgImage?: string
}

export default function PageBanner({ title, bgImage = '/assets/page-banner-bg.jpg' }: PageBannerProps) {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
      role="banner"
      aria-label={`${title} page banner`}
    >
      <div className="page-banner__overlay" aria-hidden="true" />
      <div className="page-banner__content container">
        <h1 className="page-banner__title">{title}</h1>
      </div>
    </div>
  )
}
