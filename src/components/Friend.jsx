import { useContext } from "react";
import { MoneyContext } from "./MoneyContext";
import { PhoneContext } from "./PhoneContext";

const Friend = () => {
  const money = useContext(MoneyContext);
  const [phones, setPhones] = useContext(PhoneContext);
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-lg font-semibold text-center">Friend</h1>
      <p>context api : {money}</p>
      <p>context api : {phones}</p>
      <button onClick={() => setPhones(phones + 1)} className="bg-blue-500 p-1">
        give more phones : {phones}
      </button>
    </div>
  );
};

export default Friend;
