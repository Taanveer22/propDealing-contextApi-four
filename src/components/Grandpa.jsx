import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = () => {
  return (
    <div className="border-2 border-red-600 p-5">
      <h1 className="text-4xl font-bold text-center mb-3">Grandpa</h1>
      <div className="flex gap-2 justify-between">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default Grandpa;
