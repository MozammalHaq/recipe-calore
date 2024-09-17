const Title = ({ title, num }) => {
  return (
    <div className="w-2/3 mx-auto text-center mt-3">
      <h2 className="font-bold text-xl mb-2">
        {title}: {num}
      </h2>
      <hr className="border-gray-300 mb-3" />
    </div>
  );
};

export default Title;
