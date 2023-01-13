import Image from "next/image";
import InProgress from "../../components/InProgress";
import Live from "../../components/Live";
import Planned from "../../components/Planned";
import goBack from "../../public/assets/shared/icon-arrow-left.svg";
import addIcon from "../../public/assets/shared/icon-plus.svg";

import Link from "next/link";

const index = () => {
  return (
    <div>
      <div className="bg-[#373F68] flex justify-between items-center p-5 md:rounded-[10px] text-primaryWhite md:mb-10">
        <span>
          <span className="flex items-center gap-3">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L2 5l4-4"
                stroke="#FFF"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
            <Link href="home">Go Back</Link>
          </span>
          <h1>Roadmap</h1>
        </span>

        <button className="flex items-center gap-2 bg-purple rounded-md px-4 py-2">
          <Image src={addIcon} alt="add" />
          <p>Add Feedback</p>
        </button>
      </div>
      <div className="md:hidden flex items-stretch justify-between border-b-[1px] border-b-[rgba(140,146,179,0.25)] mb-4">
        <p className="relative before:content-[''] before:w-full before:h-1 before:absolute before:bg-orange before:bottom-0 w-1/3 py-4 flex justify-center">
          Planned
        </p>
        <p className="relative before:content-[''] before:w-full before:h-1 before:absolute  before:bottom-0 w-1/3 py-4 flex justify-center">
          In Progress
        </p>
        <p className="relative before:content-[''] before:w-full before:h-1 before:absolute before:bottom-0 w-1/3 py-4 flex justify-center">
          Live
        </p>
      </div>

      <div className="md:hidden w-[90%] mx-auto">
        <Planned />
      </div>

      <div className="hidden md:grid grid-cols-3 gap-8">
        <Planned />
        <InProgress />
        <Live />
      </div>
    </div>
  );
};
export default index;
