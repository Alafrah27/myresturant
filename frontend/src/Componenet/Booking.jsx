import { HiMiniFingerPrint, HiOutlineArrowDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div className="flex flex-col gap-6  lg:w-[70%] mx-auto bg-[#fdfbfd]">
      <h1 className="text-[16px] lg:text-[20px] space-x-2 font-semibold text-center my-[20px] text-gray-400 uppercase">
        <span className="border-b border-gray-300 inline-block pb-1">
          Forget online delivery—experience the warmth of connection and savor
          unforgettable moments with family at Flower and Firewood!
        </span>
      </h1>

      <div className="flex flex-col gap-6 w-full">
        <h1 className="flex flex-col items-center gap-2 text-[16px] space-y-4 font-semibold px-6  my-8 text-gray-400 capitalize text-center">
          <span>
            Now You Can download the app and get InLine, let have a fun with us
          </span>
          <HiOutlineArrowDown size={40} color="#fbbf24" />
        </h1>
        <div className="relative">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-full lg:w-[300px]  object-cover lg:max-h-auto mx-auto"
          />
          <button className="absolute flex items-center gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-center px-9 py-5 rounded-md bg-[#3E3322] text-white w-auto  h-[50px] font-bold text-[18px] mx-auto">
            <Link
              className="flex items-center gap-3"
              to="https://play.google.com/store/apps/details?id=com.flourfirewood"
            >
              Press Here <HiMiniFingerPrint size={20} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
