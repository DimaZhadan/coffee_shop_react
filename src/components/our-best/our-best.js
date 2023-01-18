import './our-best.scss';

const OurBest = ({ data }) => {
   const elements = data.map(item => {
      return (
         <div key={item.id} className='best-item'>
            <img className='best-item__img' src={item.img} alt={item.alt} />
            <span className='best-item__text'>{item.title}</span>
            <span className='best-item__text bold'>{item.price}</span>
         </div>
      )
   })

   return (
      <div className='ourbest'>
         <div className="container">
            {elements}
         </div>
      </div>
   )

}

export default OurBest;