export default function CustomerSettings() {
  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen">

      {/* Page title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Customer Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Customer Data */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Customer Data
          </h2>

          <div className="space-y-4 text-sm text-gray-600">

            <div className="flex items-center justify-between">
              <span>Collect Phone Number</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600"/>
            </div>

            <div className="flex items-center justify-between">
              <span>Collect Email Address</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600"/>
            </div>

            <div className="flex items-center justify-between">
              <span>Track Customer Activity</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600"/>
            </div>

          </div>
        </div>


        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Customer Notifications
          </h2>

          <div className="space-y-4 text-sm text-gray-600">

            <div className="flex items-center justify-between">
              <span>Send Order Confirmation</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600"/>
            </div>

            <div className="flex items-center justify-between">
              <span>Send Booking Reminder</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600"/>
            </div>

            <div className="flex items-center justify-between">
              <span>Send Promotional Messages</span>
              <input type="checkbox" className="w-4 h-4 accent-blue-600"/>
            </div>

          </div>
        </div>


        {/* Auto Reply */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:col-span-2">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Chatbot Auto Reply
          </h2>

          <textarea
            placeholder="Example: Hi! Thanks for contacting us. Our team will reply shortly."
            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
            Save Message
          </button>

        </div>

      </div>

    </div>
  );
}