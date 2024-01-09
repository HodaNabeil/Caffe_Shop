
import "../style/heromenu.css";
import { Link } from "react-router-dom";
function HeroMenu() {
  return (
      <div className="   max-w-[1640px] m-auto ">
        <div className="grid grid-cols-2  gap-[30px] md:gap-[80px] px-[60px]  py-[30px] pb-[120px]">
          <div>
            <h1
              className="  font_2  text-[50px] md:text-[60px] lg:text-[80px]">
                Signature <br /> Menu
            </h1>
            <p className="font_3 text-[18px]  sm:text-[30px]   font-bold md:font-normal md:text-[50px]">Coffe Latte</p>
            <p className=" text-[14]  sm:text-[15px]  md:text-[17px]  max-w-[400px]"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              dolorem aperiam perferendis?
            </p>
            <Link 
              className="mainbtn mt-[20px]   md:mt-[30px]  tracking-[1.6px] inline-block  text-center w-[100px]"
              to='/'> 
              Order 
            </Link>
          </div>
          <div  className=" hero-img-rigth  ">
            <img src={require(`../IMg/small_left.png`)} alt="" />
          </div>
        </div>


      </div>
  

  );
}

export default HeroMenu;
