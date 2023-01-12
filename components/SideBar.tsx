import { useLocalContext } from "../context/localContext";

const SideBar = () => {
  const allCategories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const roadMaps = [
    {
      name: "Planned",
      number: 12,
      color: "orange",
    },
    {
      name: "In Progress",
      number: 0,
      color: "purple",
    },
    {
      name: "Live",
      number: 5,
      color: "secondaryBlue",
    },
  ];

  const { showSidebar } = useLocalContext();
  return (
    <div
      className={`${
        showSidebar
          ? "flex flex-col absolute w-[280px] bg-secondaryWhite gap-[20px] p-5 right-0 transition-all"
          : "hidden"
      } md:static md:w-auto md:p-0 md:grid md:grid-cols-2 md:gap-[10px] lg:flex lg:flex-col lg:gap-[20px]`}
    >
      <div className="flex flex-wrap gap-[8px] bg-primaryWhite p-6 rounded-[10px]">
        {allCategories.map((categories) => (
          <p
            key={categories}
            className="bg-secondaryWhite text-primaryBlue px-4 py-2 rounded-lg"
          >
            {categories}
          </p>
        ))}
      </div>

      <div className="p-6 bg-primaryWhite rounded-[10px]">
        <span className="flex justify-between mb-6">
          <h1>Roadmap</h1>
          <p className="text-primaryBlue">View</p>
        </span>

        <div>
          {roadMaps.map((roadMap) => (
            <span key={roadMap.name} className="flex justify-between">
              <p
                className={`before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:rounded-full before:bg-${roadMap.color} before:left-[-20px] before:top-[7px] before:bottom-0 relative ml-[20px]`}
              >
                {roadMap.name}
              </p>
              <h1 className="self-center">{roadMap.number}</h1>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
