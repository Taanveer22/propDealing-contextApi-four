const Special = ({ asset }) => {
  return (
    <div className="border-2 border-green-600 p-5">
      <h1 className="text-lg font-semibold text-center">Special</h1>
      <p>props drilling : {asset}</p>
    </div>
  );
};

export default Special;
