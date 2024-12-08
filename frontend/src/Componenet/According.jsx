import AccordingList from "./AccordingList";

function According() {
  return (
    <div className="flext flex-col gap-6 my-3 mb-3 w-fll lg:w-[70%] px-5 py-2 mx-auto ">
      <h1 className="text-[16px] lg:text-[20px] space-x-2 font-semibold text-center my-[20px] text-gray-400 uppercase">
        <span className="border-b border-gray-300 inline-block pb-1">
          Frequently Asked Questions
        </span>
      </h1>
      <AccordingList />
    </div>
  );
}

export default According;
