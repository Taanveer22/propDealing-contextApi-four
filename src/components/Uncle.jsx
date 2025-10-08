import Cousin from "./Cousin";

const Uncle = ({asset}) => {
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-2xl font-semibold text-center">Uncle</h1>
      <div className="flex gap-2">
        <Cousin name="Apurbo" asset={asset}></Cousin>
        <Cousin name="Nisho"></Cousin>
      </div>
    </div>
  );
};

export default Uncle;
