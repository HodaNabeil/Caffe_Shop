import { useDispatch, useSelector } from "react-redux"
import { removeFromFavorites } from "../Store/Slices/FavoritesSlice";



import Footer from "../Components/Footer";
import "../style/favorites.css"

function FavoritesPage() {

  const favorites = useSelector((state)=> state.favorites);

  const disptach = useDispatch()

  const handleRemove = (item) => {
    disptach(removeFromFavorites(item));
  };


   return  favorites.length > 0 ?
 (
    <div className="bg-[#fefae0]   favorites-container   ">
      <h3 className=" element-center min-color text-[30px] font_2 py-[40px] relative">
        
        Favorites <i className="fa-solid fa-heart  ml-[15px] min-color text-[20px]"></i>
      </h3>

      <div className=" container top-[20px]  relative grid gap-[20px] grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
          {favorites.map((item ,index)=> {
            return (
              <div key={index}
                className="bg-[#faedcd]  rounded-[8px] p-[10px] flex-col element-center">
                  <div className=" w-[200px]">
                    <img 
                    className=" object-cover max-w-full "
                    src={item.image} alt={item.name} />
                  </div>
                  <div className=" relative">
                    <h4 className=" min-color font_2 text-[20px] my-[10px]">{item.name}</h4>
                    <div  
                    className=" p-[10px] mb-[20px] rounded-[10px] cursor-pointer 
                      w-[50px] h-[30px] left-[15px]  relative bg-[#220100]    element-center"
                    onClick={()=> handleRemove(item)}
                    
                    >
                    <i className="fa-solid fa-xmark  text-[#fefae0] text-[15px] cursor-pointer  element-center "></i>
                  </div>
                  </div>
                </div>
            )
          })}
        </div>

        <div className=" pt-[70px]  bg-[#fefae0]  ">
          <Footer/>
        </div>
    </div>
  )
  : 
  (
    <div className="bg-[#fefae0] main-height-screen  w-full   relative ">
        <h2 className=" element-center  absolute font_2  text-[20px] sm:text-[30px] md:text-[40px] 
    top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-color">
      Favorites list is empty
       <i className="fa-solid fa-heart  ml-[15px] min-color text-[20px]"></i>
      </h2>
    </div>
  )
}

export default FavoritesPage
