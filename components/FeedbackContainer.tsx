import Image from "next/image";
import iconSuggestion from "../public/assets/suggestions/icon-suggestions.svg";
import iconPlus from "../public/assets/shared/icon-plus.svg";
import Feedback from "./Feedback";

const FeedbackContainer = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-[#373F68] text-primaryWhite py-4 px-6 md:rounded-[10px] mb-6">
        <span className="hidden md:flex items-center gap-[8px]">
          <Image src={iconSuggestion} alt="suggestions" />
          <h1>80 Suggestions</h1>
        </span>

        <span>
          Sort by:
          <strong>Most Upvotes</strong>
        </span>

        <button className="flex items-center bg-purple rounded-[10px] py-2 px-4">
          <Image src={iconPlus} alt="add Feedback" />
          <p>Add Feedback</p>
        </button>
      </div>
      <div className="flex flex-col gap-3 w-[90%] md:w-auto mx-auto">
        <Feedback />
        <Feedback />
        <Feedback />
      </div>
    </div>
  );
};
export default FeedbackContainer;
