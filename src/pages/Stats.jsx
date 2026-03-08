const stats = [
  { title: "Total Customers", value: "5,000", trend: "+10%" },
  { title: "Active Customers", value: "1,000", trend: "+8%" },
  { title: "Avg Orders per Customer", value: "50", trend: "+12%" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
        >
          <p className="text-gray-500 text-sm sm:text-base">{item.title}</p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-2 text-gray-800">
            {item.value}
          </h2>

          <span
            className={`mt-1 inline-block text-sm font-medium ${
              item.trend.startsWith("+")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {item.trend} more than previous
          </span>
        </div>
      ))}
    </div>
  );
}