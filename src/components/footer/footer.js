import { Link } from 'react-router-dom';

import DividerBlack from '../divider-black/divider-black';

import logo from '../../icons/coffee-beans-logo.svg';
import './footer.scss';

const Footer = () => {

   return (
      <footer className="footer">
         <div className="container">
            <ul className="footer__list">
               <li className="footer__list-item"><Link className="footer__list-link" to="/"><img src={logo} alt="Coffee logo" /> Coffee house</Link></li>
               <li className="footer__list-item"><Link className="footer__list-link" to="/our-coffe">Our coffee</Link></li>
               <li className="footer__list-item"><Link className="footer__list-link" to="/">For your pleasure</Link></li>
            </ul>
            <DividerBlack />
         </div>
      </footer>
   )
}

export default Footer;