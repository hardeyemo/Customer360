
export default function CustomerDetailsHeader() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-col md:items-center md:justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">  Customer History</h2>
        <p className="text-gray-500 text-sm mt-1"> View conversation sessions and appointment history</p>
      </div>
    </div>
  );
}