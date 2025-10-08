import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-2xl font-semibold text-center">Dad</h1>
      <div className="flex gap-2">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Dad;
