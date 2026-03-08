
import CustomerInfo from "./CustomerInfo";
import CustomerHistory from "./CustomerHistory";

export default function CustomerDetails() {
  return (
    <div className="flex bg-white min-h-screen">

      <div className="flex-1 p-8 space-y-6">
        <div className="flex gap-6">
          <CustomerInfo />
        </div>
        <CustomerHistory />
      </div>
    </div>
  );
}