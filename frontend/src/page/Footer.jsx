import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full flex flex-col gap-8 my-10 mb-3   px-5 py-2  bg-gray-50 h-auto ">
      <h1 className="text-[16px] lg:text-[20px] space-x-2 font-semibold text-center my-[20px] text-gray-400 uppercase">
        Flower & Firewood Team
      </h1>
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="w-1/2">
          working hours from 8am to 1 am including Fridays
        </h1>
        <h1>Sunday we are closed</h1>
      </div>

      <div className="flex flex-col gap-3 items-center text-center">
        <h1>
          Delivery orders are through JAHEZ Hander Station the chefiz Only
        </h1>
        <h1>Delivery orders are through Applications only</h1>
      </div>
      <div className="flex flex-col gap-3 items-center text-center">
        <h1>download our app</h1>
        <h1 className="text-[10px]">
          <Link
            className="flex items-center gap-3 underline"
            to="https://play.google.com/store/apps/details?id=com.flourfirewood"
          >
            https://play.google.com/store/apps/details?id=com.flourfirewood
          </Link>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-3  text-center bg-slate-900 text-white ">
        <h1 className="text-[13px] lg:text-[20px] space-x-2 font-semibold text-center my-[20px] text-gray-400 uppercase w-full">
          CopyRight&copy; 2024 by Flower & Firewood
        </h1>
      </div>
    </div>
  );
}

export default Footer;
