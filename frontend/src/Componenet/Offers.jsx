function Offers() {
  return (
    <div className="flex flex-col gap-3 w-full lg:w-[70%] h-[100%] bg-gray-50 my-10 mx-auto">
      <h1 className="text-[16px] lg:text-[20px] space-x-2 font-semibold  text-center my-5 text-gray-300 uppercase">
        what would you like to have today{" "}
      </h1>

      <div className="flex flex-col gap-3 w-full  my-8 mx-auto px-8 py-6">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-10  w-full mx-auto">
            <h1 className="w-full lg:w-1/2 text-[16px] lg:text-[20px] my-4 lg:my-7">
              <span className="text-orange-500 sm:italic text-[18px] lg:text-[24px] text-center block my-2">
                Delicious Food at Affordable Prices
              </span>
              <br />
              Artisanal Pastries, Breakfast, Lunch, and all day. Our menu is
              served all day for you to indulge whenever and whatever you crave.
            </h1>
            <img
              src="https://inapi.fandfrestaurants.com/media/attachments/IMG_9236.jpeg " // Assuming fimage1.webp is correctly placed in the public directory
              alt="Artisanal Pastries"
              className="w-full lg:w-[400px] object-cover max-h-[350px]  rounded-md" // Added max-height and border-radius for styling
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 w-full mx-auto">
            <h1 className="w-full lg:w-1/2 text-[16px] lg:text-[20px] my-4 lg:my-7">
              <span className="text-orange-500 sm:italic text-[17px] lg:text-[24px] text-center block my-2">
                Are you a Coffee Lover?
              </span>
              <br />
              Discover the perfect brew at Flower and Firewood, where every cup
              of coffee is crafted with passion and precision. Let the rich
              aromas and exquisite flavors inspire your day and awaken your
              senses!
            </h1>
            <img
              src="https://inapi.fandfrestaurants.com/media/attachments/Screenshot_2024-04-01_at_12.30.23PM.png " // Assuming fimage1.webp is correctly placed in the public directory
              alt="Artisanal Pastries"
              className="w-full lg:w-[400px] object-cover max-h-[350px] rounded-md" // Added max-height and border-radius for styling
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
