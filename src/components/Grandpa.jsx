import { useState } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import { GiftContext } from "./GiftContext";
import { MoneyContext } from "./MoneyContext";
import { PhoneContext } from "./PhoneContext";
import Uncle from "./Uncle";

const Grandpa = () => {
  const asset = "diamond";
  const [phones, setPhones] = useState(1);
  return (
    <div className="border-2 border-red-600 p-5 space-y-3">
      <h1 className="text-4xl font-bold text-center">Grandpa</h1>
      <p className="text-xl font-semibold text-center text-red-500">
        owner : {asset}
      </p>
      <p className="text-xl font-semibold text-center text-red-500">
        phones : {phones}
      </p>
      <PhoneContext.Provider value={[phones, setPhones]}>
        <MoneyContext.Provider value="1111">
          <GiftContext.Provider value="gold">
            <div className="flex gap-2 justify-between">
              <Dad asset={asset}></Dad>
              <Uncle asset={asset}></Uncle>
              <Aunty></Aunty>
            </div>
          </GiftContext.Provider>
        </MoneyContext.Provider>
      </PhoneContext.Provider>
    </div>
  );
};

export default Grandpa;
