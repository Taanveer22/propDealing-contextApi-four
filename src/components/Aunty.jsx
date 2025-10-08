import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-2xl font-semibold text-center">Aunty</h1>
      <div className="flex gap-2">
        <Cousin name="Mim"></Cousin>
        <Cousin name="Aisha"></Cousin>
      </div>
    </div>
  );
};

export default Aunty;
