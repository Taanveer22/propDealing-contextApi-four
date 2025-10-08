import Special from "./Special";

const Myself = ({asset}) => {
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-lg font-semibold text-center">Myself</h1>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;
