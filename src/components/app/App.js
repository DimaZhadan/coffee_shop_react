import { Component } from 'react';

import Title from '../tiltle/title';
import Promo from '../promo/promo';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import DividerBlack from '../divider-black/divider-black';

import './App.css';

import solimo from '../../images/our_best_img/solimo.png';
import presto from '../../images/our_best_img/presto.png';
import aromistico from '../../images/our_best_img/aromistico.png';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { img: solimo, alt: 'coffe pacs', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', id: 1 },
        { img: presto, alt: 'coffe pacs', title: 'Presto Coffee Beans 1 kg', price: '15.99$', id: 2 },
        { img: aromistico, alt: 'coffe pacs', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', id: 3 }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Promo />
        <AboutUs />
        <OurBest data={this.state.data}/>
        <Footer/>
        <DividerBlack/>
      </div>
    )
  }

}

export default App;
