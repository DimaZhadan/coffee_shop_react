import { useParams } from 'react-router-dom';

import Header from '../../header/header';
import OurCoffeeTitle from '../ourcoffee-title/ourcoffee-title';
import DividerBlack from '../../divider-black/divider-black';
import Footer from '../../footer/footer';

import './our-coffee-item.scss';

const OurCoffeeItem = ({ data }) => {
   const { coffeeId } = useParams();
   const singleData = data.filter(item => item.id == coffeeId)
   return (
      <>
         <Header />
         <OurCoffeeTitle />
         <div className="container">
            <div className="our-coffee-item">
               <div className="our-coffee-item__img">
                  <img src={singleData[0].img} alt={singleData[0].alt} />
               </div>
               <div className="our-coffee-item__descr">
                  <h4 className="our-coffee-item__title">
                     About it
                  </h4>
                  <DividerBlack />
                  <div className="our-coffee-item__country">
                     <span>Country:</span> {singleData[0].country}
                  </div>
                  <div className="our-coffee-item__description">
                     <span>Description:</span> {singleData[0].description}
                  </div>
                  <div className="our-coffee-item__price">
                     <span>Price:</span> {singleData[0].price}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default OurCoffeeItem;