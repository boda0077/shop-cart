
import { Link } from "react-router";
import image1 from "../assets/clothes.png";
import image2 from "../assets/labtop.png";
import image3 from "../assets/ring.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger , useGSAP);

function Section() {


 

  useGSAP( () => {

  
    gsap.from(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%"
      },
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2,
    });
    
  })

  return (
    <section className="bg-linear-[180deg,white_20%,#d1ac00] text-gray-800 px-12 py-6   flex flex-col items-center justify-center min-h-screen">
      <div className="grid justify-center items-center my-[5rem]">
        <p className="text-xl mb-2 text-center mt-8 font-semibold">
          We provide a wide range of high-quality products including
          electronics, clothing, home goods, and more.
        </p>
        <p className="text-xl text-center font-semibold">
          Enjoy shopping with us and find the best deals on the market!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-8 mb-[8rem] ">
        <div  className="box flex items-center bg-white shadow-lg w-[300px] h-[100px] rounded-2xl relative">
          <img className="w-[60px] ml-4" src={image1} alt="cloth" />
          <span className="ml-4 flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full inline-block mr-2"></span>
            <span className="text-lg font-medium">Clothes</span>
          </span>
        </div>
        <div className="box flex items-center bg-white shadow-lg w-[300px] h-[100px] rounded-2xl relative">
          <img className="w-[60px] ml-4" src={image2} alt="laptop" />
          <span className="ml-4 flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full inline-block mr-2"></span>
            <span className="text-lg font-medium">PC Parts</span>
          </span>
        </div>
        <div  className="box flex items-center bg-white shadow-lg w-[300px] h-[100px] rounded-2xl relative">
          <img className="w-[60px] ml-4" src={image3} alt="ring" />
          <span className="ml-4 flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full inline-block mr-2"></span>
            <span className="text-lg font-medium">Rings</span>
          </span>
        </div>
      </div>

      <Link
        to="/shop"
        className="text-white bg-[#f6be9a] hover:bg-yellow-800  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-3xl px-10  py-4.5 text-center inline-flex items-center me-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 transition-all "
      >
        <svg
          className="w-5 h-5 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
       Shop Now
      </Link>
    </section>
  );
}
export default Section;
