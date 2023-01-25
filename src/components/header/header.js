import { Link } from 'react-router-dom';

import logo from '../../icons/favicon.svg';
import './header.scss';

const Header = () => {

   return (
      <nav className="title">
         <div className="container">
            <ul className="title__list">
               <li className="title__list-item">
                  <Link className="title__list-link" to="/">
                     <img src={logo} alt="Coffee logo" />
                     Coffee house
                  </Link>
               </li>
               <li className="title__list-item">
                  <Link className="title__list-link" to="/our-coffe">
                     Our coffee
                  </Link>
               </li>
               <li className="title__list-item">
                  <Link className="title__list-link" to="/for-your-pleasure">
                     For your pleasure
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Header;