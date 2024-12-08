import { useState } from "react";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Questions = [
  {
    id: 1,
    question: "what time we open and close ?",
    answer:
      "Our customer service is available from 8 AM to 1 AM. We’re here to assist you anytime during those hours!",
  },
  {
    id: 2,
    question: "What our menu look like ?",
    answer:
      "Welcome to our restaurant! We serve a delightful variety of dishes throughout the day. Join us for breakfast from 8 AM to 3:30 PM, where you can enjoy our delicious breakfast menu. After 3:30 PM until 6:00 PM, we offer a selection of manakish, refreshing drinks, and desserts. Finally, from 6:30 PM onwards, indulge in our dinner menu with a range of savory options. We look forward to serving you!",
  },
  {
    id: 3,
    question: "do we have another branch? ",
    answer:
      "We appreciate your interest! Currently, we do not have any other branches. We’re dedicated to providing the best service and experience at our location. Thank you for your support!",
  },
  {
    id: 4,
    question: "do we have valet service ?",
    answer:
      "Yes, we offer valet service all day for your convenience. Just pull up, and our team will take care of your vehicle while you enjoy your time with us!",
  },
  {
    id: 5,
    question: "how can i get inline ?",
    answer:
      "To join us, simply check in through our app, as we don’t take reservations. We operate on a first-come, first-served basis, so just arrive early to secure your spot! You can find the link to our app below",
    link: "https://play.google.com/store/apps/details?id=com.flourfirewood",
  },
];
function AccordingList() {
  const [isOpen, setIsOpen] = useState(null);
  const toggleAccordion = (i) => {
    if (isOpen === i) {
      setIsOpen(null);
    } else {
      setIsOpen(i);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <ul className=" flex flex-col gap-4 w-full">
        {Questions.map((item, i) => (
          <div key={item.id} className="flex flex-col gap-4 w-full">
            <li className="flex flex-col gap-10 w-full py-5 px-8 bg-slate-100 cursor-pointer">
              <div
                onClick={() => toggleAccordion(i)}
                className="flex justify-between items-center w-full "
              >
                <h1>{item.question}</h1>
                <h1>
                  {isOpen === i ? (
                    <HiMiniChevronUp size={20} />
                  ) : (
                    <HiMiniChevronDown size={20} />
                  )}
                </h1>
              </div>
              <div
                className={
                  isOpen === i
                    ? "block transition-all duration-500 ease-in-out "
                    : "hidden"
                }
              >
                <h1>{item.answer}</h1>
                <h1>
                  <Link to={item.link} className="underline text-blue-700">
                    {item.link}
                  </Link>
                </h1>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AccordingList;
