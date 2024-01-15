
import '../style/cardcoffe.css'
import Icon from './Icon'

import '../style/cardcoffe.css'

function CardCoffe({cofe}) {
  return (
    <div   className='card-cofe  '>
      <div className='image'>
        <img src={cofe.image} alt={cofe.name} />
      </div>
      <div>
        <h4 className='min-color capitalize '>{cofe.name}</h4>
        <p className='second-color font_2 des text-[18px] py-2'>{cofe.description}</p>
      </div>
        <Icon  cofe={ cofe}/>
      <div className=' relative'>
        <p className='price-btn font_2 '>{cofe.price}$</p>
      </div>
  </div>
  )
}

export default CardCoffe
