import './promo.scss';

import dividerLogo from '../../icons/divider-logo.svg';

const Promo = () => {

   return (
      <div className="promo">
         <div className="container">
            <h1 className="promo__title">Everything You Love About Coffee</h1>
            <div className="promo__divider"><img src={dividerLogo} alt="Coffee seds" /></div>
            <div className="promo__text mt-35">We makes every day full of energy and taste</div>
            <div className="promo__text mt-20">Want to try our beans?</div>
            <button className="promo__btn">More</button>
         </div>
      </div>
   )
}

export default Promo;