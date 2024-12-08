// import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" homepage absolute w-full  h-screen -z-10  top-0 left-0  mx-auto overflow-hidden ">
      <img
        src="/fImage1.png"
        alt="photo"
        className="w-full h-full object-cover backdrop-blur-2xl filter brightness-50 text-center flex justify-center items-center"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full lg:w-[40%] px-9 py-5 rounded-md mx-auto">
        <div className=" flex flex-col gap-7 bg-gray-200 p-7 z-10  ">
          <h1 className=" text-3xl lg:text-5xl font-bold text-center ">
            FLOWER & FIREWOOD
          </h1>
          <h1 className=" text-[14px] lg:text-3xl font-semibold italic  capitalize leading-relaxed">
            Welcome to Flower and Firewood, where the beauty of nature meets the
            warmth of rustic flavors in every dish. Join us for a memorable
            dining experience that nourishes both body and soul!
          </h1>
          {/* <button className=" bg-orange-600 py-5 px-8 my-8 border border-none focus:outline-none rounded-[8px] text-white font-bold text-[14px] lg:text-[18px] mt-4 cursor-pointer">
            <Link to="/menu" className="cursor-pointer">
              Check Our Menu
            </Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
