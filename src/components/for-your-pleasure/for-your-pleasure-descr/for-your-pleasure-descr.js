import DividerBlack from '../../divider-black/divider-black';

import forYourPleasureImg from '../../../images/for-your-pleasure-img.png';

import './for-your-pleasure-descr.scss';

const ForYourPleasureDescr = () => {
   return (
      <div className="container">
         <div className='for-your-pleasure-descr'>
            <div className="for-your-pleasure-descr__img">
               <img src={forYourPleasureImg} alt="Girl with coffee" />
            </div>
            <div className="for-your-pleasure-descr__description">
               <h3 className="for-your-pleasure-descr__title">
                  About our beans
               </h3>
               <DividerBlack />
               <div className="for-your-pleasure-descr__text">
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

export default ForYourPleasureDescr;