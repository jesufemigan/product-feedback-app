import Image from "next/image";
import Link from "next/link";

import goBack from "../public/assets/shared/icon-arrow-left.svg";
import addFeedback from "../public/assets/shared/icon-new-feedback.svg";
import editFeedback from "../public/assets/shared/icon-edit-feedback.svg";
import iconDown from "../public/assets/shared/icon-arrow-down.svg";
import iconUp from "../public/assets/shared/icon-arrow-up.svg";
import { useState } from "react";
import { useHandleOutsideClick } from "../hooks/handleOutsideClick";

const FeedbackForm = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  const ref = useHandleOutsideClick(closeDropDown);

  return (
    <div className="w-[70%] mx-auto">
      <Link className="flex items-center gap-1" href="home">
        <Image src={goBack} alt="back" />
        <p>Go Back</p>
      </Link>

      <div className="relative bg-primaryWhite rounded-[10px] p-8 mt-20">
        <Image
          src={addFeedback}
          alt="addFeedback"
          className="absolute left-[30px] top-[-35px]"
        />

        <h1 className="text-primaryGray font-bold text-2xl mb-6">
          Create New Feedback
        </h1>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <h3 className="text-primaryGray font-semibold">Feedback Title</h3>
              <p className="text-secondaryGray">
                Add a short,descriptive headline
              </p>
            </label>
            <input
              type="text"
              className="bg-secondaryWhite w-full rounded-md py-3 px-6"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <h3 className="text-primaryGray font-semibold">Category</h3>
              <p className="text-secondaryGray">
                Choose a category for your feedback
              </p>
            </label>
            <div className="relative">
              <button
                className="bg-secondaryWhite w-full rounded-md py-3 flex justify-between items-center px-6"
                onClick={() => setShowDropDown((prev) => !prev)}
                type="button"
                ref={ref}
              >
                <p>Feature</p>
                <Image src={iconDown} alt="showMore" />
              </button>
              {showDropDown && (
                <ul className="absolute bg-primaryWhite top-12 rounded-sm w-full max-h-60 z-10 focus:outline-none divide-y divide-secondary divide-opacity-10 shadow-box">
                  <li className="flex items-center justify-between whitespace-nowrap px-6 py-3 text-default">
                    Feature
                  </li>
                  <li className="flex items-center justify-between whitespace-nowrap px-6 py-3 text-default">
                    Bug
                  </li>
                  <li className="flex items-center justify-between whitespace-nowrap px-6 py-3 text-default">
                    Enhancement
                  </li>
                  <li className="flex items-center justify-between whitespace-nowrap px-6 py-3 text-default">
                    UI
                  </li>
                  <li className="flex items-center justify-between whitespace-nowrap px-6 py-3 text-default">
                    UX
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <h3 className="text-primaryGray font-semibold">Feedback Title</h3>
              <p className="text-secondaryGray">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </label>
            <textarea
              name=""
              id=""
              rows={5}
              className="bg-secondaryWhite w-full rounded-md py-3 px-6 overflow-auto"
            ></textarea>
          </div>

          <div className="flex justify-end text-primaryWhite gap-5">
            <button className="bg-[#373F68] px-5 py-3 rounded-lg">
              Cancel
            </button>
            <button className="bg-purple rounded-lg px-5">Add Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FeedbackForm;
