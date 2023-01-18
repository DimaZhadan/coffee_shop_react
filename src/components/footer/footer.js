import logo from '../../icons/coffee-beans-logo.svg';
import './footer.scss';

const Footer = () => {

   return (
      <div className="footer">
         <div className="container">
            <ul className="footer__list">
               <li className="footer__list-item"><a className="footer__list-link" href="#"><img src={logo} alt="Coffee logo" /> Coffee house</a></li>
               <li className="footer__list-item"><a className="footer__list-link" href="#">Our coffee</a></li>
               <li className="footer__list-item"><a className="footer__list-link" href="#">For your pleasure</a></li>
            </ul>
         </div>
      </div>
   )
}

export default Footer;