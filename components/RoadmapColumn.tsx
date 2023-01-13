import RoadmapCard from "./RoadmapCard";

const RoadmapColumn: React.FC<{
  name: string;
  details: string;
  color: string;
}> = ({ name, details, color }) => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-primaryGray font-bold mb-1 capitalize">{name}</h1>
        <p className="text-[12px] text-accentGray">{details}</p>
      </div>
      <div className="flex flex-col gap-3">
        <RoadmapCard color={color} />
        <RoadmapCard color={color} />
      </div>
    </>
  );
};
export default RoadmapColumn;
