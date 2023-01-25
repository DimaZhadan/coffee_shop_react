import { Link } from 'react-router-dom';

import './our-coffee-list.scss';

const OurCoffeeList = ({ data }) => {

   const elements = data.map(item => {
      return (
         <Link key={item.id} className='our-coffee-list__item' to={`/our-coffee-item/${item.id}`}>
            <img className='our-coffee-list__img' src={item.img} alt={item.alt} />
            <span className='our-coffee-list__title'>{item.title}</span>
            <span className='our-coffee-list__country'>{item.country}</span>
            <span className='our-coffee-list__price bold'>{item.price}</span>
         </Link>
      )
   })

   return (
      <div className="container">
         <div className='our-coffee-list' >
            {elements}
         </div>
      </div>
   )
}

export default OurCoffeeList;