const Cooked = ({ finished }) => {
  const time = finished.reduce(
    (total, recipe) => total + recipe.preparingTime,
    0
  );
  const hour = Math.floor(time / 60);
  const minute = time % 60;
  const calories = finished.reduce(
    (total, recipe) => total + recipe.calories,
    0
  );
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
          </tr>
        </thead>
        <tbody>
          {finished.map((item, i) => (
            <tr key={item.id} className="border-t border-gray-300">
              <td className="py-2 px-3">{i + 1}</td>
              <td className="py-2 px-3">{item.recipeName}</td>
              <td className="py-2 px-3">{item.preparingTime}</td>
              <td className="py-2 px-3">{item.calories}</td>
            </tr>
          ))}
        </tbody>
        {finished.length > 0 && (
          <tfoot className="bg-gray-300">
            <td className="py-2 px-3"></td>
            <td className="py-2 px-3"></td>
            <td className="py-2 px-3">
              Total Time: {hour}:{minute} minutes
            </td>
            <td className="py-2 px-3">Total Calories: {calories} calories </td>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Cooked;
