import './HomePage.css'

export default function HomePage() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section
        id="hero"
        className="hero"
        aria-label="Hero – Solidarity Advisors"
      >
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__headline">
            We are an independent, boutique, partner-centric Investment Management firm
            investing in listed Indian equities.
          </h1>
        </div>
      </section>
    </main>
  )
}
