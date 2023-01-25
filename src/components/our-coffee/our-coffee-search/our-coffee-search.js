import { Component } from 'react';

import './our-coffee-search.scss';

class OurCoffeeSearch extends Component{
   constructor(props) {
      super(props);
      this.state = {
         term: ''
      }
   }

   onUpdateSearch = (e) => {
      const term = e.target.value;
      this.setState({ term })
      this.props.onUpdateSearch(term)
   }

   render() {
      return(
         <input className='our-coffee-filter__input'
                  type="text"
                  placeholder="start typing here..."
                  value={this.term}
                  onChange={this.onUpdateSearch} 
                  />
      )
   }

}

export default OurCoffeeSearch;