import { Component } from 'react';

import Header from '../header/header';
import ForYourPleasureTitle from './for-your-pleasure-title/for-your-pleasure-title';
import ForYourPleasureDescr from './for-your-pleasure-descr/for-your-pleasure-descr';
import OurCoffeeList from '../our-coffee/our-coffee-list/our-coffee-list';
import Footer from '../footer/footer';

import './for-your-pleasure.scss';
import aromistico from '../../images/our_best_img/aromistico.png';

class ForYourPleasure extends Component {
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
         ]
      }
   }

   render() {

      const { data } = this.state;
      return (
         <div>
            <Header />
            <ForYourPleasureTitle />
            <ForYourPleasureDescr />
            <OurCoffeeList data={data} />
            <Footer />
         </div>
      )
   }
}

export default ForYourPleasure;