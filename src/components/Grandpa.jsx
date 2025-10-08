import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="border-2 border-red-600 p-5 space-y-3">
      <h1 className="text-4xl font-bold text-center">Grandpa</h1>
      <p className="text-xl font-semibold text-center text-red-500">owner : {asset}</p>
      <div className="flex gap-2 justify-between">
        <Dad asset={asset}></Dad>
        <Uncle asset={asset}></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default Grandpa;
