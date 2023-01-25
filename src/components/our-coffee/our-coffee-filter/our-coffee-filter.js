// import OurCoffeeSearch from '../our-coffee-search/our-coffee-search';

import './our-coffee-filter.scss';

const OurCoffeeFilter = (props) => {

   const filterBtn = [
      { name: 'Brazil', colored: false },
      { name: 'Kenya', colored: false },
      { name: 'Columbia', colored: false }
   ];


   const filtrElements = filterBtn.map(item => {

      return (
         <button className='filter-btn'
            type="button"
            key={item.name}
            onClick={() => props.onFilterSelect(item.name)}>
            {item.name}
         </button>
      )
   })

   return (
      <>
         {filtrElements}
      </>
   )
}

export default OurCoffeeFilter;