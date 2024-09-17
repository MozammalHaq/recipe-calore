import Cooked from "./Comp/Cooked";
import Order from "./Comp/Order";
import Title from "./Comp/Title";

const Orders = ({ cooks, handleFinish, finished }) => {
  return (
    <div className="border border-gray-300 rounded-lg px-2 pb-4">
      <Title title="Want to Cook" num={cooks.length} />
      <Order cooks={cooks} handleFinish={handleFinish} />
      <br />
      <Title title="Currently cooking" num={finished.length} />
      <Cooked finished={finished} />
    </div>
  );
};

export default Orders;
