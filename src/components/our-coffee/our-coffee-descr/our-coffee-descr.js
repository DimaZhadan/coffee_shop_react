import DividerBlack from '../../divider-black/divider-black';

import girlWithCoffee from '../../../images/girl-with-coffee.png';

import './our-coffee-descr.scss';

const OurCoffeeDescr = () => {
   return (
      <div className="container">
         <div className='our-coffee-descr'>
            <div className="our-coffee-descr__img">
               <img src={girlWithCoffee} alt="Girl with coffee" />
            </div>
            <div className="our-coffee-descr__description">
               <h3 className="our-coffee-descr__title">
                  About our beans
               </h3>
               <DividerBlack />
               <div className="our-coffee-descr__text">
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                  <span>
                     Afraid at highly months do things on at. Situation recommend objection do intention
                     so questions.
                     As greatly removed calling pleased improve an. Last ask him cold feel
                     met spot shy want. Children me laughing we prospect answered followed. At it went
                     is song that held help face.
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurCoffeeDescr;