import { Component } from 'react';

import Header from "../header/header";
import OurCoffeeTitle from './ourcoffee-title/ourcoffee-title';
import OurCoffeeDescr from './our-coffee-descr/our-coffee-descr';
import OurCoffeeFilter from './our-coffee-filter/our-coffee-filter';
import OurCoffeeSearch from './our-coffee-search/our-coffee-search';
import OurCoffeeList from './our-coffee-list/our-coffee-list';
import Footer from '../footer/footer';

import './our-coffee.scss';
import aromistico from '../../images/our_best_img/aromistico.png';

class OurCoffee extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1 },
            { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '7.99$', id: 2 },
            { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '8.99$', id: 3 },
            { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '9.99$', id: 4 },
            { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '5.99$', id: 5 },
            { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '7.99$', id: 6 }
         ],
         term: '',
         filter: 'all'
      }
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
         return item.title.indexOf(term) > -1
      })
   }

   onUpdateSearch = (term) => {
      this.setState({ term });
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case 'Brazil':
            return items.filter(item => item.country === 'Brazil');
         case 'Kenya':
            return items.filter(item => item.country === 'Kenya');
         case 'Columbia':
            return items.filter(item => item.country === 'Columbia');
         default:
            return items
      }
   }

   onFilterSelect = (filter) => {
      this.setState({ filter });
   }

   render() {
      const { data, term, filter } = this.state;

      const visibleData = this.filterPost(this.searchEmp(data, term), filter);

      return (
         <div>
            <Header />
            <OurCoffeeTitle />
            <OurCoffeeDescr />
            <>
               <div className='container'>
                  <div className='our-coffee-filter'>
                     <div className="our-coffee-filter__search">
                        <div className='our-coffee-filter__descr mr-20'>
                           Looking for
                        </div>
                        <OurCoffeeSearch onUpdateSearch={this.onUpdateSearch} />
                     </div>
                     <div className="our-coffee-filter__filterbtn">
                        <div className='our-coffee-filter__descr mr-35'>
                           Or filter
                        </div>
                        <OurCoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                     </div>
                  </div>
               </div>
            </>
            <OurCoffeeList data={visibleData} />
            <Footer />
         </div>
      )
   }
}

export default OurCoffee;