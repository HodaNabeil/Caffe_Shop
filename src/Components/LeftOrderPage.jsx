
import {useSelector,useDispatch} from 'react-redux'
import { decreaseQuantity, deleteProduct, incrementQuantity } from '../Store/Slices/Card';
function LeftOrderPage() {

  const order =useSelector((state)=> state.order);
  const dispatch= useDispatch()

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity({productId}));
  };
  
  const handledecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({productId}));
  };
  return (
    <div className='flex-1 '>
    <div className='  relative  grid grid-cols-1 md:grid-cols-2 g-[10px]'>
    {
      order.map((product)=> {
        return(
          <div  key={order.id} className=' card-order-left relative  '>
              <p className=' qauntity'>{product.qauntity}</p>
            <div className='imge'>
              <img src={product.image} alt={product.name} />
            </div>
            <p
              className=' text-center mainColor m-[10px]  capitalize font_3 
              font-bold tracking-[2px] text-[30px]'>{product.name}
            </p>
            <div className='container-qauntity'> 
              <p className=' cursor-pointer'
                onClick={()=>{
                  handleIncrementQuantity(product.id)
              }}>
                +
              </p>
                <p className=' cursor-pointer'
                onClick={()=>{
                  handledecreaseQuantity(product.id)
              }}>
                -
              </p>
            </div>
            <div 
              onClick={()=> dispatch(deleteProduct(product))}
              className='delete-btn'>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          
          </div>
        )
      })
    }
    </div>

  </div>
  )
}

export default LeftOrderPage
