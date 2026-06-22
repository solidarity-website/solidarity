import InnerPageLayout from '../components/InnerPageLayout'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <InnerPageLayout title="About Us">
      <div id="guide" className="about-guide">
        <h2 className="about-guide__heading">Goals & Principles</h2>
        
        <p>Our goal is to earn ~15%+ post fees, over rolling 5 years with prudent risk-taking. We don’t aim to chase the highest returns in short term horizons. The approach aims to beat the BSE500 by 3% per annum (BSE 500TRI by ~1.5% per annum) every rolling 5 years. &nbsp;&nbsp;15% IRR is not a guarantee and depends both on nominal GDP growth and long-term interest rates.&nbsp; <strong><u>The primary measure of success is outperforming the BSE500TRI. </u></strong></p>
        
        <p><strong>Our core beliefs we use to make investment choices</strong></p>
        <p>There are multiple approaches to investing. They principally differ in time horizons in which one thinks, belief in cash calls, red lines on risk. All choices will work well in particular environments.</p>
        <p>Our path is one that we can stick with long term.</p>

        <ul className="about-guide__list">
          <li>We want to embrace Quality in everything we do, long-term thinking and partnering with people we can trust as a way of life. This is a “stamina and resilience over speed” approach as medium intensity “returns” via sustainable compounding are compensated with longer “n”. A “Quality” mooring ensures low probability of permanent loss of capital.</li>
          <li>Our definition of “Quality” is investing with an “ownership mindset”: ~18%+ sustainable ROE (~16%+ for Banks), backing promoters that think long term, prioritize resilience over speed, and operate with a “win-win” mindset with their ecosystem of environment, customers and minority shareholders.</li>
          <li>Over the long term, stock prices are slaves to earnings growth. Hence, we invest in businesses that can deliver high-probability long-term secular earnings compounding. As their earnings grow, stock prices will inevitably follow. These are typical companies in industries with secular tail winds, are leaders of their industry or niches and are expanding their competencies and edge.</li>
          <li>Entry valuations matter. But short-term earnings multiple for companies at a very early stage of their life cycle can be very misleading as it is very hard to fairly price growth longevity. The risk of over-paying by 10-15% can be managed by stretching time and position sizing.</li>
          <li>We will never chase the wrong risks (compromise on governance) to boost returns irrespective of how attractive valuations are. This will reflect in poor performance during raging bull markets.</li>
          <li>We will be willing to embrace some illiquidity in the portfolio to take advantage of our size and fish where larger firms cannot. The downside of this approach is that illiquidity results in much higher stock price volatility, which in the short term is indistinguishable from risk.</li>
          <li>Investing with an “ownership mindset” means the bar for exit due to valuations alone will be high. However, we are allocators of capital and not permanent owners of businesses. Greed can drive prices of companies well above fair value. We will exit when we encounter euphoria and if we can allocate to better opportunities.</li>
          <li>We will occasionally break the “ownership mindset” to buy into “renters” (not great businesses as they are less than 18% ROE, but available very cheap and could evolve into compounders). We will do this sparingly when the upside/downside is strongly in favor, we are aligned with promoter thinking, see a trigger for value-unlocking and don’t find opportunities in our core bucket.</li>
          <li><strong>“Solidarity” implies alignment of interests – hence CIO family positions will be in 100% alignment.</strong></li>
        </ul>
      </div>
    </InnerPageLayout>
  )
}
