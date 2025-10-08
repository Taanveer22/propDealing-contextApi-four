import Special from "./Special";

const Cousin = ({ name, asset }) => {
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-lg font-semibold text-center">Cousin</h1>
      <p className="text-lg text-center">{name}</p>
      {asset && <Special asset={asset}></Special>}
    </div>
  );
};

export default Cousin;
