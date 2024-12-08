// import Booking from "../Componenet/Booking";
import Booking from "../Componenet/Booking";
import HomePage from "../Componenet/HomePage";
import Offers from "../Componenet/Offers";
import According from "../Componenet/According";
// import Offers from "../Componenet/Offers";

function Home() {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto   ">
      <div className="w-full h-screen">
        <HomePage />
      </div>
      <Offers />
      <Booking />
      <div className="w-full">
        <According />
      </div>
    </div>
  );
}

export default Home;
