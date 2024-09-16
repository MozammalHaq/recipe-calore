const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center px-4 sm:px-12 md:px-40 lg:px-48 py-4 sm:py-4 md:py-8 lg:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg">{description}</p>
    </div>
  );
};

export default SectionTitle;
