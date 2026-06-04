import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <p className="footer__copyright">
          Solidarity Advisors Pvt Ltd. All rights reserved.
        </p>

        <ul className="footer__links">
          <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
          <li className="footer__sep" aria-hidden="true">|</li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li className="footer__sep" aria-hidden="true">|</li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
        </ul>

        <p className="footer__legal">
          CIN: U67190MH2011PTC224651&nbsp;|&nbsp;
          SEBI PMS Registration No: INP000004961&nbsp;|&nbsp;
          SEBI AIF Category III Registration No: IN/AIF3/25-26/1894
        </p>
      </div>
    </footer>
  )
}
