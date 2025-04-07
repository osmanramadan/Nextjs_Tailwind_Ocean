
export default function Partners() {
  return (
    <div className="container mx-auto">
      {/* Partners Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-30 py-2 md:!px-14 lg:!px-34">
        {[
          "company-1",
          "company-2",
          "company-3",
          "company-4",
          "company-5",
        ].map((company, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={`/images/partners/${company}.svg`}
              alt={`Partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
