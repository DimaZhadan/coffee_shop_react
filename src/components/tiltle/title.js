import logo from '../../icons/favicon.svg';
import './title.scss';

const Title = () => {

   return (
      <div className="title">
         <div className="container">
            <ul className="title__list">
               <li className="title__list-item"><a className="title__list-link" href="#"><img src={logo} alt="Coffee logo" /> Coffee house</a></li>
               <li className="title__list-item"><a className="title__list-link" href="#">Our coffee</a></li>
               <li className="title__list-item"><a className="title__list-link" href="#">For your pleasure</a></li>
            </ul>
         </div>
      </div>
   )
}

export default Title;