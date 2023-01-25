import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import MinePage from '../mine-page/mine-page';
import OurCoffee from '../our-coffee/our-coffee';
import OurCoffeeItem from '../our-coffee/our-coffee-item/our-coffee-item';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure';

import aromistico from '../../images/aromistico-img.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: aromistico,
          alt: 'coffe pacs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          country: 'Brazil',
          price: '6.99$',
          id: 1
        },
        {
          img: aromistico,
          alt: 'coffe pacs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          country: 'Kenya',
          price: '7.99$',
          id: 2
        },
        {
          img: aromistico,
          alt: 'coffe pacs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          country: 'Columbia',
          price: '8.99$',
          id: 3
        },
        {
          img: aromistico,
          alt: 'coffe pacs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          country: 'Brazil',
          price: '9.99$',
          id: 4
        },
        {
          img: aromistico,
          alt: 'coffe pacs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          country: 'Brazil',
          price: '5.99$',
          id: 5
        },
        {
          img: aromistico,
          alt: 'coffe pacs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          country: 'Brazil',
          price: '7.99$',
          id: 6
        }
      ]
    }
  }

  render() {

    const { data } = this.state;
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<MinePage />} />
            <Route path='/*' element={<OurCoffee />} />
            <Route path='/our-coffee-item/:coffeeId' element={<OurCoffeeItem data={data} />} />
            <Route path='/for-your-pleasure' element={<ForYourPleasure/>} />
          </Routes>
        </div>
      </Router>
    )
  }

}

export default App;
