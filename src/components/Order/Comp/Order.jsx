const Order = ({ cooks, handleFinish }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-l-0 border-r-0 border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left text-xs font-bold tracking-wider w-3"></th>
            <th className="text-left text-xs font-bold tracking-wider">Name</th>
            <th className="text-left text-xs font-bold tracking-wider">
              Time (min)
            </th>
            <th className="text-left text-xs font-bold tracking-wider">
              Calories
            </th>
            <th className="text-left text-xs font-bold tracking-wider"></th>
          </tr>
        </thead>
        <tbody>
          {cooks.map((cook, i) => (
            <tr key={cook.id} className="border-t border-gray-300">
              <td className="py-2 px-3">{i + 1}</td>
              <td className="py-2 px-3 text-left">{cook.recipeName}</td>
              <td className="py-2 px-3">{cook.preparingTime}</td>
              <td className="py-2 px-3">{cook.calories}</td>
              <td className="py-2 px-3 text-end">
                <button
                  onClick={() => handleFinish(cook.id)}
                  className="bg-green-500 font-semibold text-black py-1 px-2 rounded-full"
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
